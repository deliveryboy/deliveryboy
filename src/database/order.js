const pool = require('./pool.js');

const insertOrder = (order_amount,order_status,time_start,time_end, cb)=>{
  const sqlQuery = 'INSERT INTO orders (order_amount,order_status,time_start,time_end)VALUES($1,$2,$3,$4) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[order_amount,order_status,time_start,time_end],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

const selectOrder = (id,cb)=>{
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


module.exports ={
  insertOrder:insertOrder,
  selectOrder:selectOrder
};
