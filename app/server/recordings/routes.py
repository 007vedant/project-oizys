from bson import ObjectId
from server.models import User
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from flask import request, jsonify, Blueprint
from server.utils import token_required, allowed_file

recordings = Blueprint("recordings", __name__)

gauth = GoogleAuth()
gauth.LocalWebserverAuth()
drive = GoogleDrive(gauth)


@recordings.route("/api/upload", methods=["POST"])
@token_required
def upload(_id):
    file = request.files["file"]
    if file and allowed_file(file.filename):
        ext = file.filename.rsplit(".", 1)[1].lower()
        user = User.objects(_id=ObjectId(_id)).first()
        filename = f"{user.name}" + "_" + str(user.audio_cnt) + "." + ext
        with open(f"temp.{ext}", "w") as f:
            file.save(f)

        fdrive = drive.CreateFile(
            {
                "title": filename,
                "parents": [{"id": "1MVlGBZ94PGWNcsf1uBYNwB3yWMWarTtg"}],
            }
        )
        fdrive.SetContentFile(f"temp.{ext}")
        fdrive.Upload()

        user.audio_cnt += 1
        user.save()
        return jsonify(filename), 201

    return jsonify("Invalid request."), 400
