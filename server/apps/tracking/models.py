from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from .database import Base


class SignUpUser(Base):
    __tablename__ = "sign_up_users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True)


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
    extension_id = Column(String)
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

    user = relationship("User", back_populates="survey_response")


class ExitSurveyResponse(Base):
    __tablename__ = "exit_survey_responses"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    date = Column(DateTime)
    intervention_uninstalled = Column(Boolean)
    uninstall_date = Column(DateTime, nullable=True)
    uninstall_reason = Column(String, nullable=True)
    intervention_ux_impact = Column(String)
    mindless_consumption_changes = Column(String)
    intervention_effect = Column(String)
    perception_with_notifications = Column(String)
    future_intervention_usage_likelihood = Column(String)
    habit_awareness = Column(Boolean)
    additional_comments = Column(String)
