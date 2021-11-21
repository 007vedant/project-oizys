from flask import Flask
from mongoengine import connect
from server.config import Config

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    connect("candidates")

    return app
