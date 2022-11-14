"""Server for restaurant ratings app."""

from flask import (Flask, jsonify, render_template, request, flash, session,
                   redirect)
from model import connect_to_db, db, User
import crud


app = Flask(__name__)
app.secret_key = "dev"


@app.route('/')
def show_homepage():
    """Show the application's homepage."""

    return render_template('index.html')


@app.route('/<path>')
def route(path):

    return render_template('index.html')


@app.route('/api/categories')
def get_categories():

    categories = crud.get_all_categories()

    category = []

    for items in categories:
        category.append(items.name)

    return jsonify(category)


if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
