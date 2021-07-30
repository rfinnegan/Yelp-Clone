const restaurantService = require("../services/restaurants");

function findAll(req, res) {
    restaurantService.findAll()
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
        const results = await restaurantService.findById(searchID);
        res.send(results.rows[0]);
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
        const searchName = req.params.searchName;
        const results = await restaurantService.findByName(searchName);
        res.send(results.rows);
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
    findAll,
    findById,
    create,
    findByName,
    update
};