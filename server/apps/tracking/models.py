from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from .database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True)

    survey_response = relationship(
        "SurveyResponse", uselist=False, back_populates="user"
    )
    usage = relationship("Usage", back_populates="user")


class Usage(Base):
    __tablename__ = "usage"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    session_begin = Column(DateTime)
    session_end = Column(DateTime)

    user = relationship("User", back_populates="usage")


class SurveyResponse(Base):
    __tablename__ = "survey_responses"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    date = Column(DateTime)
    age = Column(Integer)
    gender = Column(String)
    race = Column(String)
    income_bracket = Column(String)
    app_usage_frequency = Column(String)
    mindless_usage_frequency = Column(String)
    average_mindless_usage_duration_minutes = Column(Integer)
    social_media_health_impact = Column(String)
    addiction_status = Column(Boolean)

    user = relationship("User", back_populates="survey_response")
