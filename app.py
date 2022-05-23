from flask import Flask, render_template
from datetime import datetime
import re

app = Flask(__name__)

@app.route("/report/<report_type>")
def report(report_type = None):
    return render_template(
        "report.html",
        report_type=report_type
    )

@app.route("/test/")
@app.route("/test/<name>")
def test(name = None):
    return render_template(
        "test.html",
        name=name,
        date=datetime.now()
    )

