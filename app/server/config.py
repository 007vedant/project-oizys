import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    MONGO_URI = os.getenv("MONGO_URI")
    SECRET_KEY = os.getenv("SECRET_KEY")
    ALLOWED_EXTENSIONS = ["mp3", "wav"]
    UPLOAD_DIR = os.path.join(os.getcwd(), "server", "uploads")
