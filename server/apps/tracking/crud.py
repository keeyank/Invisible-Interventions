from sqlalchemy.orm import Session
from sqlalchemy.sql import text
from sqlalchemy import update

from datetime import datetime, timedelta

from . import models, schemas

END_SESSION_SECONDS = 15

def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

# Idea: Find usage row for the same user in the DB that has the latest date
# If this date is less than N seconds in the past, update this row with the new
# date as end date. Otherwise, create a new row using the Usage object
def session_update(db: Session, usage: schemas.UsageCreate):

    result = db.execute(text(f'''
                        SELECT id, MAX(session_end) AS max_date
                        FROM Usage
                        WHERE user_id = {usage.user_id}
                        '''))
    # Note: If the query does not return a value (i.e., no user_id rows yet, first time
    # gathering data for a user), query_objs has one None value
    row = result.one()

    # DEBUG
    print(row.max_date)
    print(row.id)

    dt_format = '%Y-%m-%d %H:%M:%S.%f'
    largest_dt = datetime.strptime(row.max_date, dt_format)
    current_dt = usage.session_end  

    if largest_dt != None and current_dt - largest_dt <= timedelta(seconds=END_SESSION_SECONDS):

        # TODO: This works, but figure out why the server is throwing an exception
        stmt = (update(models.Usage)
             .values({"session_end": current_dt})
             .where(models.Usage.id == row.id))
        db.execute(stmt)
        db.commit()
        
        # db.refresh(row)
        print('done')

        return row
    else:
        db_usage = models.Usage(user_id = usage.user_id, 
                                session_begin = usage.session_begin, 
                                session_end = usage.session_end)
        db.add(db_usage)
        db.commit()
        db.refresh(db_usage)

        return db_usage

def get_usage(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Usage).offset(skip).limit(limit).all()