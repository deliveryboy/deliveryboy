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

const selectrestaurantByName = (data,cb)=>{
  const sqlQuery = 'SELECT * FROM restaurants where name =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[data.name],(err,result)=>{

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

const selectrestaurantByID = (id,cb)=>{
  const sqlQuery = 'SELECT name,location FROM restaurants where id =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[id],(err,result)=>{
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
  selectrestaurantByName:selectrestaurantByName,
  selectrestaurantByID:selectrestaurantByID
};
