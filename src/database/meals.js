const pool = require('./pool.js');

const insertmeal = (name,img,price,amount,cook_time, cb)=>{
  const sqlQuery = 'INSERT INTO meals(name,img,price,amount,cook_time)VALUES($1,$2,$3,$4,$5) RETURNING *';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,[name,img,price,amount,cook_time],(err,result)=>{
      done(err);
      return err
        ? cb(err)
        : cb(null, result);
    });
  });
};

const selectmeal = (cb)=>{
  const sqlQuery = 'SELECT * FROM meals';
  pool.connect((poolError,client, done) => {
    if(poolError){
      return cb(poolError);
    }
    pool.query(sqlQuery,(err,result)=>{
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
  insertmeal:insertmeal,
  selectmeal:selectmeal
};
