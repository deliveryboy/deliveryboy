const deliveryboydb = require('../../database/deliveryboy.js');
const restaurantsdb = require('../../database/restaurant.js');
const geo = require('node-geo-distance');
const fetch = require('node-fetch')
module.exports = {
  sendsms: (req, res) => {
    deliveryboydb.getdeliveryboylocation((err, result1) => {
      if (err) {
        res.status(500).end();
      } else {

        restaurantsdb.selectrestaurantByName('taboon', (err, result2) => {
          const coord2= {
            latitude:  parseFloat(result2.location_lng),
            longitude:parseFloat(result2.location_lat)
          };
          if (err) {

            res.status(500).end();
          } else {
            const dis=result1.map((elm)=>{
              const coord1 = {

                latitude:parseFloat(elm.location_lng),
                longitude:parseFloat(elm.location_lat)
              };
              geo.vincenty(coord1, coord2, function(dist) {

              });
              const vincentyDist = geo.vincentySync(coord1, coord2);
              geo.haversine(coord1, coord2, function(dist) {
              });
              const haversineDist = geo.haversineSync(coord1, coord2);

              return {username:elm.username,dis:haversineDist};
            });
            if (dis[0].dis>dis[1].dis){
              deliveryboydb.selectdeliveryboyByusername({username:dis[0].username},(err,result)=>{
                const mobile=result.mobile;
                fetch('https://protective-river.glitch.me/sms', { method: 'POST',body:'to=972'+mobile+'&message=هناك طلبية  يرجى الرد بال نعم او لا لقبول الطلبية',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                })
                    .then(function(res) {
                      return res.json();
                    }).then(function(json) {
                    });
              });
            }else{
              deliveryboydb.selectdeliveryboyByusername({username:dis[1].username},(err,result)=>{
                const mobile=result.mobile;
                fetch('https://protective-river.glitch.me/sms', { method: 'POST', body: 'to=972'+mobile+'&message=هناك طلبية  يرجى الرد بال نعم او لا لقبول الطلبية' })
                    .then(function(res) {
                      return res.json();
                    }).then(function(json) {
                    });
              });
            }
          }
          res.end();
        });
      }
    });
  }
};
