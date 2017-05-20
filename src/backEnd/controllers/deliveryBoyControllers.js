const deliveryboydb = require('../../database/deliveryboy.js');

module.exports = {
  getdeliveryboy: (req, res) => {
    deliveryboydb.selectdeliveryboyByusername(req.params,(err,result)=>{

      if (err) {
        res.status(500).end();
      }
      if (result==null){
        res.status(400).end("no deliveryboy found");
      }
      else {
        res.json(result);
      }
    });
  },
  updateDeliveryBoyLocation:(req,res) =>{
    deliveryboydb.updateLocationById(req.params,req.body,(err,result)=>{

    })
  }
};
