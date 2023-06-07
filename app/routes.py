from app import app
from flask import render_template

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/lista")
def lista():
    return render_template('lista.html')

@app.route("/product")
def product():
    return render_template('product.html')

@app.route("/ekstrakcja")
def ekstrakcja():
    return render_template('ekstrakcja.html')

@app.route("/autor")
def autor():
    return render_template('autor.html')