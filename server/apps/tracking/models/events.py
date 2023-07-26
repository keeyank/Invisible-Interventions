from pydantic import BaseModel
from typing import List, Union, Optional
from pymongo import ReturnDocument
import time


from config import DB

####################
# Event DB Schema
####################


class EventModel(BaseModel):
    user_id: str
    extension_id: str
    data: dict = {}  # additional data?
    ts: int  # timestamp in epoch


####################
# Forms
####################


class EventForm(BaseModel):
    user_id: str
    extension_id: str


class EventTable:
    def __init__(self, db):
        self.db = db
        self.table = db.tracking

    def insert_event_data(self, form_data: EventForm) -> Optional[EventModel]:
        event = EventModel(**form_data.dict(), ts=int(time.time()))
        result = self.table.insert_one(event.dict())

        if result:
            return event
        else:
            return None

    def get_all_event_data(self) -> List[EventModel]:
        events = list(self.table.find({}, {"_id": False}))

        return [EventModel(**event) for event in events]


Events = EventTable(DB)
