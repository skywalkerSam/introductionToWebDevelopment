"""
Note: Please read the documentations...
"""
from flask import Flask

app = Flask(__name__)


def make_bold(function):
    def wrapper():
        return "<b>" + function() + "</b>"
    return wrapper

def make_emphasis(function):
    def wrapper():
        return "<em>" + function() + "</em>"
    return wrapper

def make_underlined(function):
    def wrapper():
        return "<u>" + function() + "</u>"
    return wrapper


@app.route("/")
@make_bold
def hello_world():
    return "<h1 style='text-align: center'> Hello, World!</h1> <p>This is a sample...</p>"


@app.route("/bye")
def bye():
    return "<p>Goodbye...</p>"


@app.route("/<name>/<int:age>")
def info(name, age):
    return f"Name: {name}, Age: {age}"


if __name__ == "__main__":
    # app.run()
    app.run(debug=True)
    