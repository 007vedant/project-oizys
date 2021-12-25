from bson import ObjectId
from server.models import User
from flask import request, jsonify, Blueprint
from server.utils import token_required, get_score

screener = Blueprint("screener", __name__)


@screener.route("/api/screening", methods=["POST"])
@token_required
def screening(_id):
    resp = request.json
    gad_score = get_score(resp, 1, 7)
    phq_score = get_score(resp, 9, 17)

    user = User.objects(_id=ObjectId(_id)).first()
    user.gad_score = gad_score
    user.phq_score = phq_score

    if gad_score >= 8 or phq_score >= 15:
        user.eligible = False

    user.save()

    return jsonify("Success"), 201
