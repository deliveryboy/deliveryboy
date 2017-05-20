const restaurantdb = require('../../database/restaurant.js');
const path = require('path');
module.exports = {
  getRestaurantsPage:(req,res)=>{
    res.sendFile(path.join(__dirname+'/../../../public/restaurant.html'));
  },
  getRestaurants: (req, res) => {
    restaurantdb.getAllRestaurant((err,result)=>{
      if (err) {
        res.status(500).end();
      }
      else {
        res.json(result);
      }
    });
  }
};
