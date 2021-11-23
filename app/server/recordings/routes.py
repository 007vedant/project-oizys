import os
import re
import datetime
from bson import ObjectId
from server.config import Config
from server.utils import token_required, allowed_file
from flask import request, redirect, abort, jsonify, Blueprint

recordings = Blueprint("recordings", __name__)


@recordings.route("/api/upload", methods=["POST"])
@token_required
def upload(_id):
    file = request.files["file"]
    if file and allowed_file(file.filename):
        ext = file.filename.rsplit(".", 1)[1].lower()
        filename = str(_id) + "." + ext
        file.save(os.path.join(Config.UPLOAD_DIR, str(_id), filename))

        return jsonify(filename), 200

    return jsonify("Invalid request."), 400
