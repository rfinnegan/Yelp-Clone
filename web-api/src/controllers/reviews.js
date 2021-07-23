const Knex = require("knex");
const dbConfig = require("../../config/db");
const knex = Knex(dbConfig);

function findAll(req, res) {
    knex.raw("SELECT * FROM reviews")
    .then(function(results) {
        res.send(results.rows);
    })
    .catch(function(error) {
        console.log(error);
        res.status(500).send('internal server error');
    })
console.log('fetching restaurants');
}

async function findAllByRestaurantId(req, res) {
    const restaurantId = req.params.restaurant_id;
    try {
        const results = await knex.raw("SELECT reviews.review_id, restaurants.restaurant_name, reviews.review_text FROM reviews INNER JOIN restaurants ON reviews.restaurant_id = restaurants.restaurant_id WHERE restaurants.restaurant_id = ?", [restaurantId])
        res.send(results.rows);
    } catch(error) {
        console.log(error);
        res.status(500).send ('internal server error');
    }
}

async function create(req, res) {
    const incomingReview = req.body;
    const doesReviewHaveSwearWords = incomingReview.indexOf('fuck') > -1;
    if (doesReviewHaveSwearWords === true) {
        res.status(400).send('No swear words allowed');
    } else {
        const newReview = await knex.raw('INSERT INTO reviews (rating, review_text, user_id, restaurant_id) VALUES (?, ?, ?, ?) RETURNING *', [
            incomingReview.rating,
            incomingReview.review_text,
            incomingReview.user_id,
            incomingReview.restaurant_id]);
        res.send(newReview);
    }
}

async function remove(req, res) {
    const deleteReview = req.params.review_id;
    await knex.raw('DELETE FROM reviews WHERE review_id = ?', [deleteReview]);
    res.send('review deleted');
}

module.exports = {
    findAll,
    findAllByRestaurantId,
    create,
    remove
}