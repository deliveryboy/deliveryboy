const customersdb = require('../../database/customers.js');

module.exports = {
  getCustomers: (req, res) => {
    customersdb.selectcustomersByName('shahenaz',(err,result)=>{
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
