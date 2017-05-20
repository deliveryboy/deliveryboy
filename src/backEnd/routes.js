const router = require('express').Router();
const customersControllers = require('./controllers/customersControllers.js');
const restaurantsControllers = require('./controllers/restaurantsControllers.js');
const deliveryBoyControllers = require('./controllers/deliveryBoyControllers.js');
const mealsControllers = require('./controllers/mealsControllers.js');
const ordersControllers = require('./controllers/ordersControllers.js');
const smsControllers = require('./controllers/smsControllers.js');
module.exports = router
.get('/restaurants',restaurantsControllers.getRestaurants)
.get('/deliveryboy/:username',deliveryBoyControllers.getdeliveryboy)
.get('/meals',mealsControllers.getMeals)
.post('/api/sms',smsControllers.responseSms)
.get('/api/sms',smsControllers.sendsms)
.get('/', customersControllers.getHomePage)
.get('/customers/:name', customersControllers.getCustomers)
.get('/restaurant',restaurantsControllers.getRestaurantsPage)
.get('/restaurants/:name',restaurantsControllers.getRestaurants)
.get('/deliveryboy',deliveryBoyControllers.getdeliveryboyPage)
.get('/getOrder',ordersControllers.getOrder)
.get('/getRestaurantOrder',restaurantsControllers.getRestaurantOrder)
.get('/getDeliveryboyOrder',deliveryBoyControllers.getDeliveryboyOrder);
// .get('/insertOrder',ordersControllers.addOrder);
