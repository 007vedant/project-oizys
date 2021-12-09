from server.utils import token_required, allowed_file, upload_file
from flask import request, jsonify, Blueprint

recordings = Blueprint("recordings", __name__)


@recordings.route("/api/upload", methods=["POST"])
@token_required
def upload(_id):
    file = request.files["file"]
    if file and allowed_file(file.filename):
        ext = file.filename.rsplit(".", 1)[1].lower()
        filename = str(_id) + "." + ext
        upload_file(file, filename, _id)
        return jsonify(filename), 200

    return jsonify("Invalid request."), 400
