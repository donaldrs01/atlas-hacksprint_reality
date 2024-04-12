from flask import Flask
import firebase_admin
from firebase_admin import firestore, credentials
import os

app = Flask(__name__)

# Initialize Firebase SDK (developer kit) and load credentials
cred = credentials.Certificate("../key.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore allowing DB access
db = firestore.client()

@app.route('/')
def index():
    return 'It works!'

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=int(os.environ.get('PORT', 8080)))
