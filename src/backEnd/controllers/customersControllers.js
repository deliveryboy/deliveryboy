const customersdb = require('../../database/customers.js');
const path = require('path');
module.exports = {
  getHomePage:(req,res)=>{
    res.sendFile(path.join(__dirname+'/../../../public/user.html'));

  },
  getCustomers: (req, res) => {
    customersdb.selectcustomersByName('Shahenaz',(err,result)=>{
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