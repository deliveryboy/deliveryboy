const customersdb = require('../../database/customers.js');

module.exports = {
  getRestaurants: (req, res) => {
    customersdb.selectrestaurantByName('zad',(err,result)=>{
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
