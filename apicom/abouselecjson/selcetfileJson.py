from flask import Flask, jsonify, abort
import json

app = Flask(__name__)

# ฟังก์ชันเพื่อโหลดข้อมูลจากไฟล์ JSON
def load_data(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        abort(404, description=f"File {filename} not found.")
    except json.JSONDecodeError:
        abort(500, description="Error decoding JSON.")

@app.route('/api/<filename>/recommendations', methods=['GET'])
def get_recommendations(filename):
    # โหลดข้อมูลจากไฟล์ที่ระบุ
    data = load_data(filename)
    
    # ตรวจสอบว่ามีข้อมูล "กระทู้แนะนำโดยสมาชิก" หรือไม่
    if "กระทู้แนะนำโดยสมาชิก" not in data:
        abort(404, description="Recommendations not found in file.")
    
    return jsonify(data["กระทู้แนะนำโดยสมาชิก"])

@app.route('/api/<filename>/trends', methods=['GET'])
def get_trends(filename):
    # โหลดข้อมูลจากไฟล์ที่ระบุ
    data = load_data(filename)
    
    # ตรวจสอบว่ามีข้อมูล "Pantip Trend" หรือไม่
    if "Pantip Trend" not in data:
        abort(404, description="Trends not found in file.")
    
    return jsonify(data["Pantip Trend"])

if __name__ == '__main__':
    app.run(debug=True)
