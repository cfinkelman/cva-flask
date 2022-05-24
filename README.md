# First build on windows
```bash
py -3 -m venv venv
venv\Scripts\activate
pip uninstall -r requirements.txt -y
pip install -r requirements.txt
pip freeze > requirements.txt
flask run --reload
```

# Question:
RCIGM Custom Variant Analysis Report second controle in third colume currently labled "INDEX FAMILY MEMBER ID" is a controle is it supposed to be?
what is the input -lab director title-
charicter limits
Do we want to block changes to some preprop feilds?