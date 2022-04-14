require('dotenv').config({ path: '.env' });
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const restaurantController = require("./controllers/restaurants");
const reviewController = require("./controllers/reviews");
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000', 'https://yelp-clone-frontend-7rh79.ondigitalocean.app']
}));
app.use(bodyParser.json());

app.listen(process.env.API_PORT, function() {
    console.log(`I'm listening on port ${process.env.API_PORT}`);
});

app.get("/restaurants", restaurantController.find);
app.get("/restaurants/:id", restaurantController.findById);
// create new restaurant
app.post("/restaurants", restaurantController.create);

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

