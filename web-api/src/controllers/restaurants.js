const Knex = require("knex");
const dbConfig = require("../../config/db");
const knex = Knex(dbConfig);

function findAll(req, res) {
    knex.raw("SELECT * FROM restaurants")
        .then(function(results) {
            res.send(results.rows);
        })
        .catch(function(error) {
            console.log(error);
            res.status(500).send('internal server error');
        })
    console.log('fetching restaurants');
}

async function findById(req, res) {
    try {
        const searchID = req.params.id;
        const results = await knex.raw("SELECT * FROM restaurants WHERE restaurant_id = ?", searchID);
        res.send(results.rows[0]);
    } catch(error) {
        console.log(error);
        res.status(500).send('internal server error');
    }
}

async function create(req, res) {
    const incomingRestaurant = req.body;
    await knex.raw(`INSERT INTO restaurants (restaurant_name, address, phone_number, city, state, zip)
    VALUES (?, ?, ?, ?, ?, ?)`, [
        incomingRestaurant.restaurant_name, 
        incomingRestaurant.address, 
        incomingRestaurant.phone_number, 
        incomingRestaurant.city, 
        incomingRestaurant.state, 
        incomingRestaurant.zip]);
    res.send('restaurant added')
}

async function findByName(req, res) {
    try {
        const searchName = '%' + req.params.searchName + '%';
        const results = await knex.raw("SELECT * FROM restaurants WHERE restaurant_name ILIKE ?;", [searchName]);
        res.send(results.rows);
    } catch(error) {
        console.log(error);
        res.status(500).send('internal server error');
    }
}

async function update(req, res) {
    const updatingRestaurant = req.body;
    const restaurantId = req.params.restaurant_id;
    await knex.raw('UPDATE restaurants SET restaurant_name = ?, address = ?, phone_number = ?, city = ?, state = ?, zip = ? WHERE restaurant_id = ?', [
        updatingRestaurant.restaurant_name,
        updatingRestaurant.address,
        updatingRestaurant.phone_number,
        updatingRestaurant.city,
        updatingRestaurant.state,
        updatingRestaurant.zip,
        restaurantId]);
    res.send('restaurant updated');
}

module.exports = {
    findAll,
    findById,
    create,
    findByName,
    update
};