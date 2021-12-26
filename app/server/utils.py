import os
import csv
import jwt
from functools import wraps
from server.config import Config
from flask import request, jsonify

# utility function for JSON Web Token Authorization in protected routes.
def token_required(foo):
    @wraps(foo)
    def decorated(*args, **kwargs):
        token = None
        if "Authorization" in request.headers:
            token = request.headers["Authorization"]

        if token is None:
            return jsonify("Access to requested resource is denied:/"), 403

        try:
            load = jwt.decode(token, Config.SECRET_KEY)
            _id = load["id"]

        except:
            return jsonify("Access to requested resource is denied:/"), 403

        return foo(_id, *args, **kwargs)

    return decorated


def allowed_file(filename):
    return (
        "." in filename
        and filename.rsplit(".", 1)[1].lower() in Config.ALLOWED_EXTENSIONS
    )


def get_score(resp, l, r):
    ref_dict = {
        "Not at all": 0,
        "Several Days": 1,
        "More than half the days": 2,
        "Nearly every day": 3,
    }
    score = 0
    for qno in range(l, r + 1):
        score += ref_dict[resp[str(qno)]]

    return score
