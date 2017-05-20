const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
const restaurantsControllers = require('./controllers/restaurantsControllers.js');
const deliveryBoyControllers = require('./controllers/deliveryBoyControllers.js');
const mealsControllers = require('./controllers/mealsControllers.js');
const smsControllers = require('./controllers/smsControllers.js');

module.exports = router
.get('/', customersControllers.getHomePage)
.get('/customers/:name', customersControllers.getCustomers)
.get('/restaurant',restaurantsControllers.getRestaurantsPage)
.get('/restaurants/:name',restaurantsControllers.getRestaurant)
.get('/deliveryboy',deliveryBoyControllers.getdeliveryboyPage)
.get('/restaurants',restaurantsControllers.getRestaurants)
.get('/deliveryboys/:username',deliveryBoyControllers.getdeliveryboy)
.get('/meals',mealsControllers.getMeals)
.get('/api/sms',smsControllers.sendsms);
