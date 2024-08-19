from flask import Flask
from flask_cors import CORS
from tags_api import tags_api
from room_api import room3_api
from pantip_katoo_api import pantip_katoo_api
from apinew import ApiTagAll 
from abouselecjson.seleNojson import pantip_tagRoom_api  # แก้ไขให้ตรงกับเส้นทางที่ถูกต้อง

app = Flask(__name__)

# Enable CORS
CORS(app)
app.register_blueprint(pantip_tagRoom_api)

# Register Blueprints
app.register_blueprint(tags_api)
app.register_blueprint(room3_api)
app.register_blueprint(pantip_katoo_api)

# Register ApiTagAll blueprints
app.register_blueprint(ApiTagAll.camera)
app.register_blueprint(ApiTagAll.cartoon)
app.register_blueprint(ApiTagAll.chalermkrung)
app.register_blueprint(ApiTagAll.chalermthai)
app.register_blueprint(ApiTagAll.family)
app.register_blueprint(ApiTagAll.food)
app.register_blueprint(ApiTagAll.gallery)
app.register_blueprint(ApiTagAll.greenzone)
app.register_blueprint(ApiTagAll.jatujak)
app.register_blueprint(ApiTagAll.klaibann)
app.register_blueprint(ApiTagAll.korea)

if __name__ == '__main__':
    app.run(debug=True)
