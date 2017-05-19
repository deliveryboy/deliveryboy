const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
module.exports = router
.get('/', customersControllers.getCustomers)
.get('/resturant');
