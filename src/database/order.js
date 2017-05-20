const pool = require('./pool.js');

const insertOrder = (order_price,order_amount,order_status,time_start,time_end, cb)=>{
  const sqlQuery = 'INSERT INTO orders (order_price,order_amount,order_status,time_start,time_end)VALUES($1,$2,$3,$4,$5) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[order_price,order_amount,order_status,time_start,time_end],(err,result)=>{
      // done(err);
      // return err
      //   ? cb(err)
      //   : cb(null, result);
      if(err){
      console.log(err);
    }
    cb(null,result);

    });
  });
};

const selectOrderByID = (id,cb)=>{
  const sqlQuery = 'SELECT * FROM orders where id =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,(err,[name],result)=>{
      const response = result.rowCount > 0
        ? result.rows[0]
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};

const selectOrderBYRestStatus = (restaurantStatus,cb)=>{
  const sqlQuery = 'SELECT * FROM orders where order_RestStatus =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,(err,[restaurantStatus],result)=>{
      const response = result.rowCount > 0
        ? result.rows[0]
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};

const selectOrderBYDeliverytStatus = (deliveryStatus,cb)=>{
  const sqlQuery = 'SELECT * FROM orders where order_deliveryboyStatus =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,(err,[deliveryStatus],result)=>{
      const response = result.rowCount > 0
        ? result.rows[0]
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};
module.exports ={
  insertOrder:insertOrder,
  selectOrderByID:selectOrderByID,
  selectOrderBYRestStatus:selectOrderBYRestStatus,
  selectOrderBYDeliverytStatus:selectOrderBYDeliverytStatus
};
