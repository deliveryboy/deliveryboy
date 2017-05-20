const deliveryboydb = require('../../database/deliveryboy.js');
const customersdb = require('../../database/customers.js');
const restaurantdb = require('../../database/restaurant.js');
const orderdb = require('../../database/order.js');

const Orderstatus ={
  beforeResReply: 'pending',
  afterResReply:'accept'
}
module.exports ={
  addOrder:(req,res)=>{
    const start_time ='Sat May 20 2017 08:30:00 (IDT)';
    const end_time = 'Sat May 20 2017 09:30:00 (IDT)';
    orderdb.insertOrder(20,2,Orderstatus.beforeResReply,'pending',start_time,end_time,(err,result)=>{
        res.json(result);
    });
  },
  getOrder:(req,res)=>{
      // restaurantdb.selectrestaurantByID(1,(err,restaurantData)=>{
      //   if(err){
      //     console.log('restaurantID err',err);
      //   }
      //   else {
      //     customersdb.selectcustomersByID(1,(err,customerData)=>{
      //       if(err){
      //         console.log('customerID err',err);
      //       }
      //       else {
      //
      // orderdb.selectOrder(20,1,'pending',2001-09-28 01:00:00,'11',(err,result)=>{
      // console.log(result);
      // res.json(result)
      // })
      //       }
      //     })
      //   }
      // })
  }
}
