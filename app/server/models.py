from bson import ObjectId
from mongoengine import (
    Document,
    StringField,
    EmailField,
    ObjectIdField,
    IntField,
    BooleanField,
)


class User(Document):
    _id = ObjectIdField(default=ObjectId)
    name = StringField(max_length=20, required=True)
    email = EmailField(required=True)
    password = StringField(required=True)
    age = IntField(required=True)
    gender = StringField(required=True)
    phq_score = IntField()
    gad_score = IntField()
    strp_score = IntField()
    eligible = BooleanField(default=True)

    meta = {"collection": "user"}
