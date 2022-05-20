# First build on windows
```bash
py -3 -m venv venv
venv\Scripts\activate
pip uninstall -r requirements.txt -y
pip install -r requirements.txt
pip freeze > requirements.txt
```