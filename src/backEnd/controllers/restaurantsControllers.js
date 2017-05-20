const restaurantdb = require('../../database/restaurantdb.js');
const path = require('path');
const orderdb = require('../../database/order.js');

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
    },

  getRestaurantOrder: (req, res) => {
    orderdb.selectOrderBYRestStatus('pending',(err,pendingOrders)=>{
      res.json(pendingOrders);
    });
  //  if()
    // orderdb.selectOrderBYID(1,(err,OrderStatus)=>{
    //   const OrderRestStatus = OrderStatus.body[0];
    //   const OrderDeliverytStatus= OrderStatus.body[0];
    //   if(OrderRestStatus == 'pending' && OrderDeliverytStatus == 'pending'){
    // }else {
    //   orderdb.updateOrderRestStatus()
    // }
    // })
  }

};
