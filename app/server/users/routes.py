import os
import jwt
import datetime
from bson import ObjectId
from server.models import User
from server.config import Config
from server.utils import token_required
from flask import request, jsonify, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash

users = Blueprint("users", __name__)


@users.route("/", methods=["GET"])
def index():
    response = jsonify("Connected to GAD Screener and Health Questionnaire!")
    return response, 200


@users.route("/api/register", methods=["POST"])
def register():
    data = request.json
    if not data or not data["name"] or not data["email"] or not data["password"]:
        return jsonify("Information entered is incomplete."), 400

    checkUser = User.objects(email=data["email"]).first()
    if checkUser:
        return jsonify("User already exists!"), 400

    hashed_pwd = generate_password_hash(data["password"])
    user = User(name=data["name"], email=data["email"], password=hashed_pwd)
    user.save()

    token = jwt.encode(
        {
            "id": str(user._id),
            "exp": datetime.datetime.utcnow() + datetime.timedelta(days=30),
        },
        Config.SECRET_KEY,
    )

    return jsonify(
        {
            "name": data["name"],
            "email": data["email"],
            "id": str(user._id),
            "token": token.decode("utf-8"),
        }
    )


@users.route("/api/login", methods=["POST"])
def login():
    data = request.json
    if not data or not data["email"] or not data["password"]:
        return jsonify("Information entered is incomplete."), 400

    checkUser = User.objects(email=data["email"]).first()
    token = None
    if checkUser:
        if check_password_hash(checkUser["password"], data["password"]):
            token = jwt.encode(
                {
                    "id": str(checkUser._id),
                    "exp": datetime.datetime.utcnow() + datetime.timedelta(days=30),
                },
                Config.SECRET_KEY,
            )
        else:
            return jsonify("Invalid email or password! Try again."), 404

    else:
        return jsonify("User does not exist."), 404

    return jsonify(
        {
            "name": checkUser["name"],
            "email": checkUser["email"],
            "id": str(checkUser._id),
            "token": token.decode("utf-8"),
        }
    )
