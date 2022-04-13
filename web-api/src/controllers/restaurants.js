const restaurantService = require("../services/restaurants");

function find(req, res) {
    const shouldSearchByName = !!req.query.search;
    console.log('search for name', shouldSearchByName)
    return shouldSearchByName ? findByName(req, res) : findAll(req, res);
}

function findAll(req, res) {
    restaurantService.findAll()
        .then(function(results) {
            res.send(results);
        })
        .catch(function(error) {
            console.log(error);
            res.status(500).send('internal server error');
        });
    console.log('fetching restaurants');
}

async function findById(req, res) {
    try {
        const searchID = parseInt(req.params.id);
        const results = await restaurantService.findById(searchID);
        res.send(results);
    } catch(error) {
        console.log(error);
        res.status(500).send('internal server error');
    }
}

async function create(req, res) {
    const incomingRestaurant = req.body;
    await restaurantService.create(incomingRestaurant);
    res.send('restaurant added');
}

async function findByName(req, res) {
    try {
        const searchName = req.query.search;
        const results = await restaurantService.findByName(searchName);
        res.send(results);
    } catch(error) {
        console.log(error);
        res.status(500).send('internal server error');
    }
}

async function update(req, res) {
    const updatingRestaurant = req.body;
    const restaurantId = req.params.restaurant_id;
    await restaurantService.update(restaurantId, updatingRestaurant);
    res.send('restaurant updated');
}

module.exports = {
    find,
    findAll,
    findById,
    create,
    findByName,
    update
};