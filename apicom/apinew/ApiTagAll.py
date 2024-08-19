from flask import Flask
from flask_cors import CORS
from .camera import camera
from .cartoon import cartoon
from .chalermkrung import chalermkrung
from .chalermthai import chalermthai
from .family import family
from .food import food
from .gallery import gallery
from .greenzone import greenzone
from .jatujak import jatujak
from .klaibann import klaibann
from .korea import korea

app = Flask(__name__)

# Enable CORS
CORS(app)

# Register Blueprints
app.register_blueprint(camera)
app.register_blueprint(cartoon)
app.register_blueprint(chalermkrung)
app.register_blueprint(chalermthai)
app.register_blueprint(family)
app.register_blueprint(food)
app.register_blueprint(gallery)
app.register_blueprint(greenzone)
app.register_blueprint(jatujak)
app.register_blueprint(klaibann)
app.register_blueprint(korea)

if __name__ == '__main__':
    app.run(debug=True)
