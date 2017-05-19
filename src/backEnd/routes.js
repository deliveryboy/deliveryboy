const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
const restaurantsControllers = require('./controllers/restaurantsControllers.js')
module.exports = router
.get('/', customersControllers.getCustomers)
.get('/restaurants',restaurantsControllers.getRestaurants);
