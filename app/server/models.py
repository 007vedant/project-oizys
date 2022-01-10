from bson import ObjectId
from mongoengine import (
    Document,
    StringField,
    EmailField,
    ObjectIdField,
    IntField,
    BooleanField,
    ListField,
)


class User(Document):
    _id = ObjectIdField(default=ObjectId)
    name = StringField(max_length=20, required=True)
    email = EmailField(required=True)
    password = StringField(required=True)
    age = IntField(required=True)
    sex = StringField(required=True)
    phq_score = IntField()
    gad_score = IntField()
    strp_scores = ListField(IntField())
    brt_scores = ListField(IntField())
    pss_scores = ListField(IntField())
    audio_cnt = IntField()
    eligible = BooleanField(default=True)

    meta = {"collection": "user"}
