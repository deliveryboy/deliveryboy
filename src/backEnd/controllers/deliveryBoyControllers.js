const deliveryboydb = require('../../database/deliveryboy.js');
const orderdb = require('../../database/order.js');
const path= require('path');

module.exports = {
  getdeliveryboyPage:(req,res)=>{
    res.sendFile(path.join(__dirname+'/../../../public/delivery.html'));
  },
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
  getDeliveryboyOrder: (req, res) => {
    ///selectresstatus if status == accept
    orderdb.selectOrderBYDeliverytStatus('pending',(err,pendingOrders)=>{
      console.log(pendingOrders);
      res.json(pendingOrders);
    });
  }
};
