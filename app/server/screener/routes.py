import os
from flask import request, jsonify, Blueprint

screener = Blueprint("screener", __name__)


@screener.route("/api/screening", methods=["GET"])
def screening():
    return jsonify("You've hit screening endpoint"), 200
