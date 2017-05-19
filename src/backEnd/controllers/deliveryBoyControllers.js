const deliveryboydb = require('../../database/deliveryboy.js');

module.exports = {
  getCustomers: (req, res) => {
    deliveryboydb.selectdeliveryboyByname('jamel mahmoud',(err,result)=>{
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
