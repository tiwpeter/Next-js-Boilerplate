# __init__.py
from flask import Flask
from flask_cors import CORS
from mainPage.tags_api import tags_api
from roomslie.room_api import room_api
from TagId.TagId import tagId_api
from nameHeader.nameHeader import nameHeader  # Use absolute import

app = Flask(__name__)

# Enable CORS
CORS(app)

# Register Blueprints
app.register_blueprint(tags_api)
app.register_blueprint(room_api)
app.register_blueprint(tagId_api)
app.register_blueprint(nameHeader)  # Register the new blueprint

if __name__ == '__main__':
    app.run(debug=True)
