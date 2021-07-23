require('dotenv').config({ path: '.env' });
const Knex = require("knex");
const express = require("express");
const app = express();
const dbConfig = require("../config/db");
const bodyParser = require("body-parser");
const restaurantController = require("./controllers/restaurants");
const reviewController = require("./controllers/reviews");
const knex = Knex(dbConfig);
app.use(bodyParser.json());

app.listen(8080, function() {
    console.log("I'm listening on port 8080");
});

app.get("/restaurants", restaurantController.findAll);
app.get("/restaurants/:id", restaurantController.findById);
// create new restaurant
app.post("/restaurants", restaurantController.create);
// allow user to search for restaurant by name & partial name
app.get("/restaurants/search/:searchName", restaurantController.findByName);
// put request to update a restaurant
app.put("/restaurants/:restaurant_id", restaurantController.update);


// get all reviews http request
app.get("/reviews", reviewController.findAll);
// get all reviews for one restaurant - look at this with michael
app.get("/restaurants/:restaurant_id/reviews", reviewController.findAllByRestaurantId);
// create a review for a given restaurant - need to add data into json body in postman - how to filter out swear words and provide new response- service example
app.post("/reviews", reviewController.create);
// delete a review
app.delete("/reviews/:review_id", reviewController.remove);

