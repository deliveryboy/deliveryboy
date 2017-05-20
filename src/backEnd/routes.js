const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
const restaurantsControllers = require('./controllers/restaurantsControllers.js');
const deliveryBoyControllers = require('./controllers/deliveryBoyControllers.js');
const mealsControllers = require('./controllers/mealsControllers.js');
const smsControllers = require('./controllers/smsControllers.js');

module.exports = router
.get('/', customersControllers.getCustomers)
.get('/restaurants',restaurantsControllers.getRestaurants)
.get('/deliveryboy/:username',deliveryBoyControllers.getdeliveryboy)
.get('/meals',mealsControllers.getMeals)
.get('/api/sms',smsControllers.sendsms);
