const pool = require('./pool.js');

const insertrestaurant = (name, location,address,about, cb)=>{
  const sqlQuery = 'INSERT INTO restaurants(name,location,address,about)VALUES($1,$2,$3,$4) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[name, location,address,about],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

const selectrestaurantByName = (name,cb)=>{
  const sqlQuery = 'SELECT * FROM restaurants where name =$1';
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
  insertrestaurant:insertrestaurant,
  selectrestaurantByName:selectrestaurantByName
};
