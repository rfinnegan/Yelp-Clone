const Knex = require("knex");
const dbConfig = require("../../config/db");
const knex = Knex(dbConfig);

function findAll() {
    return knex.raw("SELECT * FROM restaurants");
}

async function findById(searchID) {
    const results = await knex.raw("SELECT * FROM restaurants WHERE restaurant_id = ?", searchID);
    return results
}

async function create(incomingRestaurant) {
    const results = await knex.raw(`INSERT INTO restaurants (restaurant_name, address, phone_number, city, state, zip)
    VALUES (?, ?, ?, ?, ?, ?)`, [
        incomingRestaurant.restaurant_name, 
        incomingRestaurant.address, 
        incomingRestaurant.phone_number, 
        incomingRestaurant.city, 
        incomingRestaurant.state, 
        incomingRestaurant.zip]);
}

async function findByName(searchName) {
    const wildCardSearchName = '%' + searchName + '%';
    const results = await knex.raw("SELECT * FROM restaurants WHERE restaurant_name ILIKE ?;", [wildCardSearchName]);
    return results
}

async function update(restaurantId, updatingRestaurant) {
    await knex.raw('UPDATE restaurants SET restaurant_name = ?, address = ?, phone_number = ?, city = ?, state = ?, zip = ? WHERE restaurant_id = ?', [
        updatingRestaurant.restaurant_name,
        updatingRestaurant.address,
        updatingRestaurant.phone_number,
        updatingRestaurant.city,
        updatingRestaurant.state,
        updatingRestaurant.zip,
        restaurantId]);
}

module.exports = {
    findAll,
    findById,
    create,
    findByName,
    update
};