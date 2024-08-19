from flask import Blueprint, jsonify, request
import json
from flask_cors import CORS

room3_api = Blueprint('room3_api', __name__)
CORS(room3_api)  # เพิ่ม CORS สำหรับ Blueprint นี้

# อ่านข้อมูลจากไฟล์ room3.json
with open('room3.json', 'r', encoding='utf-8') as file:
    room_data = json.load(file)

@room3_api.route('/api/room3', methods=['GET'])
def get_room3_data():
    try:
        return jsonify(room_data)
    except Exception as e:
        return jsonify({"error": "Error reading JSON file"}), 500

@room3_api.route('/api/roomtag', methods=['GET'])
def get_roomtag_data():
    tag = request.args.get('tag')  # รับค่า tag จาก query parameter
    filtered_data = [room for room in room_data if tag in room['h2_text']]
    return jsonify(filtered_data)
