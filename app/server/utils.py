import re
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
