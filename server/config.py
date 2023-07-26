from pymongo import MongoClient
import sys
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())

########################
# MongoDB
########################
# DB_URL = "host.docker.internal:27017"

DB_URL = os.environ.get("DB_URL")
DB_CRED = os.environ.get("DB_CRED")

DB_CLIENT = MongoClient(f"mongodb://{DB_CRED}@{DB_URL}/omr-scan?authSource=admin")

DB = DB_CLIENT["tracking"]
