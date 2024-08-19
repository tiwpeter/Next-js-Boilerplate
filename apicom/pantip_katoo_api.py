from flask import Blueprint, jsonify
import json

pantip_katoo_api = Blueprint('pantip_katoo_api', __name__)

def read_data_from_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        raise RuntimeError(f"An error occurred while reading the file: {str(e)}")

@pantip_katoo_api.route('/api/pantip_katoo', methods=['GET'])
def get_data1():
    try:
        data = read_data_from_file('pantip_katoo.json')
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
