const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
const deliveryBoyControllers = require('./controllers/deliveryBoyControllers.js');
module.exports = router
.get('/', customersControllers.getCustomers)
.get('/resturant').get('/deliveryboy',deliveryBoyControllers);
