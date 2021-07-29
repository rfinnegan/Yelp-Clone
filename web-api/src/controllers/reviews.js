const Knex = require("knex");
const dbConfig = require("../../config/db");
const knex = Knex(dbConfig);
const reviewsService = require("../services/reviews")

function findAll(req, res) {
    reviewsService.findAll()
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
        const results = await reviewsService.findAllByRestaurantId(restaurantId);
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
        const newReview = await reviewsService.create(incomingReview);
        res.send(newReview);
    }
}

async function remove(req, res) {
    const deleteReview = req.params.review_id;
    await reviewsService.remove(deleteReview);
    res.send('review deleted');
}

module.exports = {
    findAll,
    findAllByRestaurantId,
    create,
    remove
}