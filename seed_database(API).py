"""Script to seed database."""

import os
import json
import datetime
from random import choice

import crud
import model
import server


os.system('dropdb restaurants')
os.system('createdb restaurants')

model.connect_to_db(server.app)
model.db.create_all()

# Load restaurant data from JSON file
with open('data/response.json') as f:
    restaurant_data = json.loads(f.read())


for restaurant in restaurant_data:

    name = restaurant["name"]
    address = restaurant["location"]["address1"]
    city = restaurant["location"]["city"]
    state = restaurant["location"]["state"]
    zipcode = restaurant["location"]["zip_code"]
    latitude = restaurant["coordinates"]["latitude"]
    longitude = restaurant["coordinates"]["longitude"]

    category = restaurant["categories"][0]["title"]
    rating = restaurant["rating"]
    photo_url = restaurant["image_url"]

    # creates a restaurant
    db_restaurant = crud.create_restaurant(
        name=name,
        address=address,
        city=city,
        state=state,
        zipcode=zipcode,
        latitude=latitude,
        longitude=longitude)

    model.db.session.add(db_restaurant)
    model.db.session.flush()

    # creates a category
    db_category = crud.create_a_category(name=category)

    model.db.session.add(db_category)
    model.db.session.flush()

    # creates a relationship Restaurant-Category
    db_restaurantsCategories = crud.add_a_restaurant_to_a_category(
        restaurant_id=db_restaurant.restaurant_id,
        category_id=db_category.category_id)

    model.db.session.add(db_restaurantsCategories)
    model.db.session.flush()

    # creates a photo
    db_photo = crud.add_photo(
        photo_url=photo_url,
        restaurant_id=db_restaurant.restaurant_id,
        user_id=None)

    model.db.session.add(db_photo)
    model.db.session.flush()

    # add a rating
    db_rating = crud.create_rating(
        restaurant_id=db_restaurant.restaurant_id,
        score=rating,
        user_id=None)

    model.db.session.add(db_rating)
    model.db.session.flush()


model.db.session.commit()

for n in range(10):
    email = f'user{n}@test.com'
    password = 'test'
    fname = f'user{n}'
    lname = 'test'

    user = crud.create_user(
        email=email,
        password=password,
        fname=fname,
        lname=lname)

    model.db.session.add(user)
    model.db.session.flush()

    # # creates a review
    # for i in range(10):
    #     random_restaurant = choice(model.Restaurant.restaurant_id)
    #     print('--------test-------')
    #     print(random_restaurant)
    #     review = "This is just a test!"
    #     date = datetime.date.today()

    # review = crud.create_review(
    #     restaurant_id=random_restaurant,
    #     user_id=user,
    #     review=review,
    #     date=date)

    # model.db.session.add(review)


model.db.session.commit()
