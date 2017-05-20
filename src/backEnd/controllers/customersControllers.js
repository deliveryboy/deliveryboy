const customersdb = require('../../database/customers.js');
const path = require('path');
module.exports = {
  getCustomers: (req, res) => {
    customersdb.selectcustomersByName('Shahenaz',(err,result)=>{
      if (err) {
          res.status(500).end();
        }
        else {
          //res.json(result);
          res.sendFile(path.join(__dirname+'/../../../public/user.html'));
        }
    });
  }
};
