from pydantic import BaseModel
from datetime import datetime

class UsageBase(BaseModel):
    pass

class UsageCreate(UsageBase):
    pass

class Usage(UsageBase):
    id: int
    user_id: int
    session_begin: datetime
    session_end: datetime

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    email: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    usage: list[Usage] = []
    
    class Config:
        orm_mode = True