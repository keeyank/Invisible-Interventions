from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


#####################
#
# Usage
#
#####################


class UsageBase(BaseModel):
    user_id: int
    session_begin: datetime
    session_end: datetime
    pass


class UsageCreate(UsageBase):
    pass


class Usage(UsageBase):
    id: int

    class Config:
        orm_mode = True


#####################
#
# SurveyResponse
#
#####################


class SurveyResponseBase(BaseModel):
    age: int
    gender: str
    race: str
    income_bracket: str
    app_usage_frequency: str
    mindless_usage_frequency: str
    average_mindless_usage_duration_minutes: int
    social_media_health_impact: str
    addiction_status: bool


class SurveyResponseCreate(SurveyResponseBase):
    date: str


class SurveyResponse(SurveyResponseBase):
    date: datetime
    id: int

    class Config:
        orm_mode = True


#####################
#
# User
#
#####################


class UserBase(BaseModel):
    email: str


class UserWithSurveyCreate(UserBase, SurveyResponseCreate):
    pass


class User(UserBase):
    id: int
    usage: list[Usage] = []
    survey_response: Optional[SurveyResponse]

    class Config:
        orm_mode = True
