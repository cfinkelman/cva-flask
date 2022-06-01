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
Do we want to display error messages for validation?
How do we know a SNV is negative?
CNV EVENT how is write in supposed to work?
On SNV-POSITIVE we have a two section variant information do we need this?

# Done
prepop function
validation function

# Steps
change Index Family Member to Input Label
change Report Date Label to Input
other forms
other option for director
calculable fields

# Templates
Template CVA External Lab_1 SNV (1).pdf => SNV-EXTERNAL
Template CVA External Lab_1 SNV.pdf => SNV-EXTERNAL
Template CVA_2 SNV negative.pdf => SNV-NEGATIVE
Template CVA_1 SNV positive.pdf => SNV-POSITIVE
Template CVA_1 CNV positive.pdf => CNV almost the same as SNV-positive
Template CVA_1 Mito positive.pdf => MITO