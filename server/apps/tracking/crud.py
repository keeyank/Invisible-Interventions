from sqlalchemy.orm import Session
from sqlalchemy.sql import text

from . import models, schemas


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
                        SELECT MAX(session_end)
                        FROM Usage
                        WHERE user_id = {usage.user_id}
                        '''))
    # DEBUG
    # Note: If the query does not return a value (i.e., no user_id rows yet, first time
    # gathering data for a user), query_objs has one None value
    largest_date = result.scalars().all()[0]
    print(largest_date)
    print(type(largest_date))

    # TODO: Now that we have largest_date, we must use it to implement the logic outlined above
    # We'll need to execute another raw SQL query, this time updating. We could also use ORM
    
    db_usage = models.Usage(user_id = usage.user_id, 
                            session_begin = usage.session_begin, 
                            session_end = usage.session_end)
    db.add(db_usage)
    db.commit()
    db.refresh(db_usage)
    return db_usage

def get_usage(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Usage).offset(skip).limit(limit).all()


# def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
#     db_item = models.Item(**item.dict(), owner_id=user_id)
#     db.add(db_item)
#     db.commit()
#     db.refresh(db_item)
#     return db_item
