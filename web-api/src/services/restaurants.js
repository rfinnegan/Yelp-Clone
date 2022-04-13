const restaurantsData = require("../data_access/restaurants");

function findAll() {
    return restaurantsData.findAll();
}

function findById(searchID) {
    return restaurantsData.findById(searchID);
}

function create(incomingRestaurant) {
    return restaurantsData.create(incomingRestaurant);
}

function findByName(searchName) {
    return restaurantsData.findByName(searchName);
}

function update(restaurantId, updatingRestaurant) {
    return restaurantsData.update(restaurantId, updatingRestaurant);
}

module.exports = {
    findAll,
    findById,
    create,
    findByName,
    update
};