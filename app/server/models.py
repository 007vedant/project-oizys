from typing_extensions import Required
from bson import ObjectId
from mongoengine import Document, StringField, EmailField, ObjectIdField


class User(Document):
    _id = ObjectIdField(default=ObjectId)
    name = StringField(max_length=20, required=True)
    email = EmailField(required=True)
    password = StringField(required=True)

    meta = {"collection": "user"}
