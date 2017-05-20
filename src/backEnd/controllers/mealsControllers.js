const mealsdb = require('../../database/meals.js');
const path = require('path');
module.exports = {
  getMeals: (req, res) => {
    mealsdb.selectmeal((err,result)=>{
      if (err) {
        res.status(500).end();
      }
      else {
        res.json(result);
      }
    });
  }
};
