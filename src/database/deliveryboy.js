const pool = require('./pool.js');

const insertdeliveryboy = (name,mobile,location,identification, cb)=>{
  const sqlQuery = 'INSERT INTO delivery_person(name,mobile,location,identification)VALUES($1,$2,$3,$4) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }

    pool.query(sqlQuery,[name,mobile,location,identification],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

const selectdeliveryboyBylocation = (location,cb)=>{
  const sqlQuery = 'SELECT * FROM delivery_person WHERE location =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[location],(err,result)=>{
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
const getdeliveryboylocation = (cb)=>{
  const sqlQuery = 'SELECT username,location_lng,location_lat FROM delivery_person';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,(err,result)=>{
      const response = result.rowCount > 0
        ? result.rows
        : null;
      done(err);
      return err
        ? cb(err)
        : cb(null, response);
    });
  });
};
const selectdeliveryboyByusername = (data,cb)=>{
  const sqlQuery = 'SELECT * FROM delivery_person WHERE username =$1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[data.username],(err,result)=>{
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
const updateLocationById = (data,cb)=>{
  const sqlQuery = 'UPDATE delivery_person SET location=$1 WHERE id =$2 RETURNING location';
  //console.log(sqlQuery);
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[data.id,'1'],(err,result)=>{
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
  insertdeliveryboy:insertdeliveryboy,
  selectdeliveryboyByusername:selectdeliveryboyByusername,
  selectdeliveryboyBylocation:selectdeliveryboyBylocation,
  updateLocationById:updateLocationById,
  getdeliveryboylocation:getdeliveryboylocation

};
