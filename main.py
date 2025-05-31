from flask import Flask # type: ignore

app = Flask(__name__)

from routes import *

if __name__ == "__main__":
    app.run()