from flask import Flask, render_template, request, jsonify

import json
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
    
@app.route("/save_bill", methods=["POST"])
def save_bill():

    bill = request.json

    path = "database/receipts.json"


    if os.path.exists(path):

        with open(path, "r", encoding="utf-8") as f:
            data = json.load(f)

    else:
        data = []


    data.append(bill)


    with open(path, "w", encoding="utf-8") as f:
        json.dump(
            data,
            f,
            ensure_ascii=False,
            indent=4
        )


    return jsonify({
        "status": "success"
    })
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)
