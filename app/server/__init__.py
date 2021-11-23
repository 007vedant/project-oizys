from flask import Flask
from mongoengine import connect
from server.config import Config


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    connect("candidates", host=Config.MONGO_URI)

    from server.users.routes import users
    from server.recordings.routes import recordings
    from server.screener.routes import screener

    app.register_blueprint(users)
    app.register_blueprint(screener)
    app.register_blueprint(recordings)

    return app
