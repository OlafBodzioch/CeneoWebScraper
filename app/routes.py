from app import app

@app.route("/")
@app.route("/index")
def index():
    return "!hello world!"

@app.route("/name", defaults={'name': 'anonim'})
@app.route("/name/<name>")
def name(name):
    return f"!hello {name}!"