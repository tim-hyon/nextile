from flask import Flask
import firenode
firenode.start()

FBURL = 'https://python-firenode-test.firebaseIO.com/demo'
input_ref = firenode.Firebase(FBURL + '/input');

app = Flask(__name__)
@app.route('/')
def hello_world():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()

@app.route('/')
def index():
    return 'Index Page'
