from pymongo import MongoClient
from flask import jsonify


client = MongoClient("mongodb+srv://abdou:kaba@cluster0.8bb5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test
collection = db.buses

def insert_records(records: list):
    try:
        for record in records:
            collection.insert_one(record)
            del record["_id"]
    except:
        print("Failed to insert records")

def get_all_records():
    records = collection.find({})

    result = []
    for record in records:
        del record['_id']
        result.append(record)
    
    return jsonify(result)


    