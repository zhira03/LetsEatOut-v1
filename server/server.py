from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
import redis

app = Flask(__name__)
CORS(app)

# MongoDB setup
mongo_client = MongoClient("mongodb://localhost:27017/")
db = mongo_client["my_database"]

# Redis setup
redis_client = redis.StrictRedis(host="localhost", port=6379, decode_responses=True)

@app.route("/api/data", methods=["GET"])
def get_data():
    # Try to fetch from Redis cache
    cached_data = redis_client.get("data_key")
    if cached_data:
        return jsonify({"data": cached_data, "source": "cache"})

    # If not in cache, fetch from MongoDB
    data = db["my_collection"].find_one({}, {"_id": 0})
    if data:
        redis_client.set("data_key", str(data), ex=3600)  # Cache for 1 hour
        return jsonify({"data": data, "source": "database"})

    return jsonify({"error": "No data found"}), 404

if __name__ == "__main__":
    app.run(debug=True)
