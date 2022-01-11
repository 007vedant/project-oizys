from bson import ObjectId
from server.models import User
from flask import request, jsonify, Blueprint
from server.utils import token_required, get_score, get_pss_score

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


@screener.route("/api/pssscreening", methods=["POST"])
@token_required
def pssscreening(_id):
    resp = request.json
    pss_score = get_pss_score(resp, 1, 10)

    user = User.objects(_id=ObjectId(_id)).first()
    user.pss_scores.append(pss_score)
    user.save()

    return jsonify("Success"), 201


@screener.route("/api/reactscreening", methods=["POST"])
@token_required
def reactscreening(_id):
    resp = request.json
    strp_score = resp["strp"]
    brt_score = resp["brt"]

    user = User.objects(_id=ObjectId(_id)).first()
    user.strp_scores.append(float(strp_score))
    user.brt_scores.append(float(brt_score))
    user.save()

    return jsonify("Success"), 201
