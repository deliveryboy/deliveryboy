const restaurantdb = require('../../database/restaurant.js');
const path = require('path');


module.exports = {
  getRestaurantsPage:(req,res)=>{
    res.sendFile(path.join(__dirname+'/../../../public/restaurant.html'));
  },
  getRestaurant: (req, res) => {
    restaurantdb.selectrestaurantByName(req.params,(err,result)=>{
      if (err) {
        res.status(500).end();
      }
      else {
        console.log(result);
        res.json(result);
      }
    });
  },

  getRestaurants: (req, res) => {
    restaurantdb.getAllRestaurant((err,result)=>{
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
