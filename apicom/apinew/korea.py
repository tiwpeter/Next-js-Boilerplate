from flask import Blueprint, jsonify
import json

korea = Blueprint('korea', __name__)

def read_data_from_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        raise RuntimeError(f"An error occurred while reading the file: {str(e)}")

@korea.route('/api/korea', methods=['GET'])
def get_data1():
    try:
        data = read_data_from_file('apinew/korea.json')
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
