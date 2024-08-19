from flask import Blueprint, jsonify, request
from flask_cors import CORS
import json

tags_api = Blueprint('tags_api', __name__)
CORS(tags_api)

data_file_path = 'data.json'

def read_data_from_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        raise RuntimeError(f"An error occurred while reading the file: {str(e)}")

@tags_api.route('/api/tags', methods=['GET'])
def get_tags():
    try:
        data = read_data_from_file(data_file_path)
        page = request.args.get('page', default=1, type=int)
        per_page = request.args.get('per_page', default=4, type=int)

        tags = {
            'bangrak': [],
            'bangruk': []
        }

        for item in data:
            for tag in item.get('tags', []):
                if tag['text'] == 'มนุษย์เงินเดือน':
                    tags['bangrak'].append({
                        'title': item['title'],
                        'href': tag['href'],
                        'text': tag['text']
                    })
                elif tag['text'] == 'วอลเลย์บอล':
                    tags['bangruk'].append({
                        'title': item['title'],
                        'href': tag['href'],
                        'text': tag['text']
                    })

        start = (page - 1) * per_page
        end = start + per_page

        paginated_tags = {
            'bangrak': tags['bangrak'][start:end],
            'bangruk': tags['bangruk'][start:end]
        }

        return jsonify({
            "page": page,
            "per_page": per_page,
            "total_bangrak": len(tags['bangrak']),
            "total_bangruk": len(tags['bangruk']),
            "data": paginated_tags
        })
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
