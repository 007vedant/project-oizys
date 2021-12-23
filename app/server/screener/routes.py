import os
from server.utils import token_required, upload_csv
from flask import request, jsonify, Blueprint

screener = Blueprint("screener", __name__)


@screener.route("/api/screening", methods=["POST"])
@token_required
def screening(_id):
    resp = request.json
    filename = str(_id) + "_resp"
    upload_csv(resp, filename, _id)

    return jsonify("Success"), 201
