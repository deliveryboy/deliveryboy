const pool = require('./pool.js');
const getmobile = ( cb)=>{
  const sqlQuery = 'SELECT mobile from delivery_person';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};
// const  = (name,img,price,amount,cook_time, cb)=>{
//   const sqlQuery = 'SELECT mobile from deliveryboy';
//   pool.connect((poolError,client, done) => {
//     if(poolError){
//       return cb(poolError);
//     }
//     pool.query(sqlQuery,(err,result)=>{
//       done(err);
//       return err
//         ? cb(err)
//         : cb(null, result);
//     });
//   });
// };

module.exports ={
  getmobile:getmobile,
};
