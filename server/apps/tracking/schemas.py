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
    extension_id: str
    session_begin: datetime
    session_end: datetime
    pass


class UsageCreate(UsageBase):
    pass


class Usage(UsageBase):
    id: int

    class Config:
        orm_mode = True


class UsageForm(BaseModel):
    user_id: int
    extension_id: str


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


class SurveyResponseCreate(SurveyResponseBase):
    date: str


class SurveyResponse(SurveyResponseBase):
    date: datetime
    id: int

    class Config:
        orm_mode = True


#####################
#
# ExitSurveyResponse
#
#####################


class ExitSurveyResponseBase(BaseModel):
    intervention_uninstalled: bool
    uninstall_reason: Optional[str]
    intervention_ux_impact: str
    mindless_consumption_changes: str
    intervention_effect: str
    perception_with_notifications: str
    habit_awareness: bool
    future_intervention_usage_likelihood: str
    additional_comments: str


class ExitSurveyResponseCreate(ExitSurveyResponseBase):
    email: str
    uninstall_date: Optional[str]
    date: str


class ExitSurveyResponse(ExitSurveyResponseBase):
    date: datetime
    uninstall_date: Optional[datetime]
    id: int
    user_id: int

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
