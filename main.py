import os
from flask import Flask, send_file, send_from_directory

# set the project root directory as the static folder, you can set others.
app = Flask(__name__, static_url_path='')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/img/<path:path>')
def images(path):
    """
    Return a random image from the ones in the static/ directory
    """
    img_path = os.path.join("img", path)
    return send_file(img_path, mimetype='image/gif')

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run()
