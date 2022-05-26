from flask import Flask, render_template
from datetime import datetime
import re

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/report/<report_type>")
def report(report_type = ''):
    return render_template(
        "report.html",
        report_type=report_type.upper()
    )

