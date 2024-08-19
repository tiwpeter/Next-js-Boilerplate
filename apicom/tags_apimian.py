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
data = {}
try:
    with open('Tag.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
except FileNotFoundError:
    logging.error("Tag.json file not found.")
except json.JSONDecodeError:
    logging.error("Error decoding JSON from Tag.json.")
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

    if tag in data:
        item = data[tag]
        
        logging.debug(f"Found item for tag: {item}")

        titles = item.get('titles', [])
        start = (page - 1) * per_page
        end = start + per_page
        paginated_titles = titles[start:end]

        result = {
            "header_title": item.get('header_title'),
            "link_header": item.get('link_header'),
            "span_header": item.get('span_header'),
            "page": page,
            "per_page": per_page,
            "total_items": len(titles),
            "total_pages": (len(titles) + per_page - 1) // per_page,
            "titles": paginated_titles,
            "tagsDetail": item.get('tagsDetail', []),  # Added this line

        }
    else:
        result = {"error": "Tag not found"}

    return jsonify(result)
