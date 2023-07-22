import json
import time
from typing import List
from pydantic import BaseModel

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware


from apps.tracking.models.events import EventForm, EventModel, Events

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def get_status():
    return {"status": True}


@app.get("/data")
async def get_all_data_from_db() -> List[EventModel]:
    events = Events.get_all_event_data()
    return {"status": True, "result": events}


@app.post("/data")
async def append_data_to_db(form_data: EventForm) -> bool:
    if form_data:
        event = Events.insert_event_data(form_data)

        if event:
            return {"status": True, "result": event}
        else:
            return {"status": False, "error": "MongoDB Error"}
    else:
        return {"status": False, "error": "Empty Form"}
