const Knex = require("knex");
const dbConfig = require("../../config/db");
const knex = Knex(dbConfig);

function findAll() {
    return knex.raw("SELECT * FROM reviews");
}

async function findAllByRestaurantId(restaurantId) {
    const results = await knex.raw("SELECT reviews.review_id, restaurants.restaurant_name, reviews.review_text FROM reviews INNER JOIN restaurants ON reviews.restaurant_id = restaurants.restaurant_id WHERE restaurants.restaurant_id = ?", [restaurantId]);
    return results
}

async function create(incomingReview) {
    const newReview = await knex.raw('INSERT INTO reviews (rating, review_text, user_id, restaurant_id) VALUES (?, ?, ?, ?) RETURNING *', [
        incomingReview.rating,
        incomingReview.review_text,
        incomingReview.user_id,
        incomingReview.restaurant_id]);
    return newReview
}

async function remove(deleteReview) {
    await knex.raw('DELETE FROM reviews WHERE review_id = ?', [deleteReview]);
}

module.exports = {
    findAll,
    findAllByRestaurantId,
    create,
    remove
}