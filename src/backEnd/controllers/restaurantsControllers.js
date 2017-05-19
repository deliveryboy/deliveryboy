const restaurantdb = require('../../database/restaurant.js');

module.exports = {
  getRestaurants: (req, res) => {
    restaurantdb.selectrestaurantByName('taboon',(err,result)=>{
      if (err) {
          res.status(500).end();
        }
        else {
          console.log(result);
          res.json(result);
        }
    });
  }
};
