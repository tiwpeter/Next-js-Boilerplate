from flask import Flask, jsonify, abort, Blueprint
import json
import os

pantip_tagRoom_api = Blueprint('pantip_tagRoom_api', __name__)

# ฟังก์ชันเพื่อโหลดข้อมูลจากไฟล์ JSON
def load_data(filename):
    # เพิ่มนามสกุล .json ถ้าไม่ระบุ
    if not filename.endswith('.json'):
        filename += '.json'
    
    if not os.path.isfile(filename):
        abort(404, description=f"File {filename} not found.")
    
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except json.JSONDecodeError:
        abort(500, description="Error decoding JSON.")

@pantip_tagRoom_api.route('/api/<filename>/recommendations', methods=['GET'])
def get_recommendations(filename):
    # โหลดข้อมูลจากไฟล์ที่ระบุ
    data = load_data(filename)
    
    # ตรวจสอบว่ามีข้อมูล "กระทู้แนะนำโดยสมาชิก" หรือไม่
    if "กระทู้แนะนำโดยสมาชิก" not in data:
        abort(404, description="Recommendations not found in file.")
    
    return jsonify(data["กระทู้แนะนำโดยสมาชิก"])

@pantip_tagRoom_api.route('/api/<filename>/trends', methods=['GET'])
def get_trends(filename):
    # โหลดข้อมูลจากไฟล์ที่ระบุ
    data = load_data(filename)
    
    # ตรวจสอบว่ามีข้อมูล "Pantip Trend" หรือไม่
    if "Pantip Trend" not in data:
        abort(404, description="Trends not found in file.")
    
    return jsonify(data["Pantip Trend"])
