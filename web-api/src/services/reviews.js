const reviewsData = require("../data_access/reviews");

function findAll() {
    return reviewsData.findAll();
}

function findAllByRestaurantId(restaurantId) {
    return reviewsData.findAllByRestaurantId(restaurantId);
}

function create(incomingReview) {
    return reviewsData.create(incomingReview);
}

function remove(deleteReview) {
    return reviewsData.remove(deleteReview);
}

module.exports = {
    findAll,
    findAllByRestaurantId,
    create,
    remove
}