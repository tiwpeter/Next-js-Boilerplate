from flask import Blueprint, jsonify
import json
from flask_cors import CORS
import os

# Create Blueprint
tagId_api = Blueprint('tagId_api', __name__)
CORS(tagId_api)  # Enable CORS for this Blueprint

# Load data from JSON file
data_path = os.path.join(os.path.dirname(__file__), 'RoomPage.json')  # Update path to JSON file
try:
    with open(data_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
except FileNotFoundError:
    data = {}
    print(f"Error: File not found at path {data_path}")
except json.JSONDecodeError:
    data = {}
    print("Error: JSON decode error.")
except Exception as e:
    data = {}
    print(f"An unexpected error occurred: {e}")

def get_section_data(category, header):
    category_data = data.get(category, {})
    if not category_data:
        return None

    section_data = category_data.get("sections", [])
    for sec in section_data:
        if sec["header"] == header:
            return sec
    return None

@tagId_api.route('/api/<string:category>/Announce', methods=['GET'])
def get_announce(category):
    section = get_section_data(category, "Announce")
    if section:
        return jsonify(section)
    else:
        return jsonify({"error": "Section not found"}), 404

@tagId_api.route('/api/<string:category>/กระทู้แนะนำโดยสมาชิก', methods=['GET'])
def get_recommendations(category):
    section = get_section_data(category, "กระทู้แนะนำโดยสมาชิก")
    if section:
        return jsonify(section)
    else:
        return jsonify({"error": "Section not found"}), 404

@tagId_api.route('/api/<string:category>/Pantip Trend', methods=['GET'])
def get_pantip_trend(category):
    section = get_section_data(category, "Pantip Trend")
    if section:
        return jsonify(section)
    else:
        return jsonify({"error": "Section not found"}), 404

@tagId_api.route('/api/<string:category>/กระทู้ล่าสุด', methods=['GET'])
def get_latest_posts(category):
    section = get_section_data(category, "กระทู้ล่าสุด")
    if section:
        return jsonify(section)
    else:
        return jsonify({"error": "Section not found"}), 404

@tagId_api.route('/api/<string:category>/Pantip Pick', methods=['GET'])
def get_pantip_pick(category):
    section = get_section_data(category, "Pantip Pick")
    if section:
        return jsonify(section)
    else:
        return jsonify({"error": "Section not found"}), 404
