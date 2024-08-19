import logging
from flask import Blueprint, request, jsonify
import json
from flask_cors import CORS

# Create Blueprint
tags_api = Blueprint('tags_api', __name__)
CORS(tags_api)

# ตั้งค่าการบันทึก
logging.basicConfig(level=logging.DEBUG)

# โหลดข้อมูลจากไฟล์ JSON
data = []
try:
    with open('spit3.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
except FileNotFoundError:
    logging.error("spit3.json file not found.")
except json.JSONDecodeError:
    logging.error("Error decoding JSON from spit3.json.")
except Exception as e:
    logging.error(f"An unexpected error occurred: {e}")

@tags_api.route('/search', methods=['GET'])
def search():
    tag = request.args.get('tag')
    page = request.args.get('page', default=1, type=int)
    per_page = request.args.get('per_page', default=10, type=int)

    # Validate page and per_page
    if page < 1:
        return jsonify({"error": "Page number must be greater than 0"}), 400
    if per_page < 1:
        return jsonify({"error": "Items per page must be greater than 0"}), 400

    logging.debug(f"Received tag: {tag}")
    logging.debug(f"Page: {page}, Per page: {per_page}")

    if not tag:
        return jsonify({"error": "Tag parameter is required"}), 400

    # Initialize result
    result = {"headers": {}, "titles": []}

    # Search through the list of data
    for entry in data:
        if 'headers' in entry and tag in entry['headers']:
            header_data = entry["headers"][tag]
            result["headers"] = {
                "title": header_data.get("title"),
                "second_title": header_data.get("second_title"),
                "t3": header_data.get("t3"),
                "t4": header_data.get("t4")
            }
            
            titles = entry.get("titles", [])
            start = (page - 1) * per_page
            end = start + per_page
            paginated_titles = titles[start:end]

            result["titles"] = paginated_titles
            break
    else:
        result["error"] = "Tag not found"

    return jsonify(result)
