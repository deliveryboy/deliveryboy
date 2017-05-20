const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
const restaurantsControllers = require('./controllers/restaurantsControllers.js');
const deliveryBoyControllers = require('./controllers/deliveryBoyControllers.js');

module.exports = router
.get('/', customersControllers.getHomePage)
.get('/customers/:name', customersControllers.getCustomers)
.get('/restaurant',restaurantsControllers.getRestaurantsPage)
.get('/restaurants/:name',restaurantsControllers.getRestaurants)
.get('/deliveryboy',deliveryBoyControllers.getdeliveryboyPage)
.get('/deliveryboy/:name',deliveryBoyControllers.getdeliveryboy)
