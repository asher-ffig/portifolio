from main import app
from flask import render_template, url_for

@app.route("/", methods=['GET', 'POST'])
def homepage():
    return render_template("portifolio.html")

@app.route("/precos", methods=['GET', 'POST'])
def precos():
    return render_template("precos.html")
