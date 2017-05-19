const pool = require('./pool.js');

const insertcustomers = (firstName, lastName,email,address,mobile,location, cb)=>{
  const sqlQuery = 'INSERT INTO customers(first_name,last_name,email,address,mobile,location)VALUES($1,$2,$3,$4) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[firstName, lastName,email,address,mobile,location],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

const selectcustomersByName = (name,cb)=>{
  const sqlQuery = 'SELECT * FROM customers where first_name = $1';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[name],(err,result)=>{
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
  insertcustomers:insertcustomers,
  selectcustomersByName:selectcustomersByName
};
