const async = require('async');
const pool = require('./pool.js');

module.exports = (cb) => {
  pool.connect((err, client, done) => {
    if (err) {
      return cb(err);
    }
    async.series([
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS customers (
           id SERIAL PRIMARY KEY,

        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS restaurants (
           id SERIAL PRIMARY KEY,
        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS meals (
           id SERIAL PRIMARY KEY,
        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS deliveryboy (
           id SERIAL PRIMARY KEY,
        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS orders (
           id SERIAL PRIMARY KEY,
        )`,callback);
      }
    ], (err) => {
      done(err);
      return cb(err);
    });
  });
};
