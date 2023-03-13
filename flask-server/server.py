from flask import Flask

app = Flask(__name__)

# API routes


@app.route("/background-data")
def background_data():
    return "background data"


if __name__ == "__main__":
    app.run(debug=True)
