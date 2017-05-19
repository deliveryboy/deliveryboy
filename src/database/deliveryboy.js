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
const selectdeliveryboyByusername = (data,cb)=>{
  const sqlQuery = 'SELECT * FROM delivery_person WHERE username =$1';
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

module.exports ={
  insertdeliveryboy:insertdeliveryboy,
  selectdeliveryboyByusername:selectdeliveryboyByusername,
  selectdeliveryboyBylocation:selectdeliveryboyBylocation
};
