const async = require('async');
const pool = require('./pool.js');

module.exports = (cb) => {
  pool.connect((err, client, done) => {
    if (err) {
      return cb(err);
    }
    async.series([
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS "customers" (
        	"id" serial NOT NULL,
        	"first_name" varchar(50) NOT NULL,
        	"last_bame" varchar(50) NOT NULL,
        	"email" varchar(100) NOT NULL,
        	"address" varchar(255) NOT NULL,
        	"mobile" varchar(10) NOT NULL,
        	"location" varchar(255) NOT NULL,
        	CONSTRAINT customers_pk PRIMARY KEY ("id")
        ) `,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS "restaurants" (
        	"id" serial NOT NULL,
        	"name" varchar(50) NOT NULL,
        	"location" varchar(255) NOT NULL,
        	"address" varchar(255) NOT NULL,
        	"about" TEXT,
        	CONSTRAINT restaurants_pk PRIMARY KEY ("id")
        ) `,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS "meals" (
        	"id" serial NOT NULL,
        	"name" varchar(50) NOT NULL,
        	"img" varchar(255) NOT NULL,
        	"restaurant_id" serial NOT NULL,
        	"price" varchar(25) NOT NULL,
        	"amount" int NOT NULL,
        	"cook_time" varchar(25) NOT NULL UNIQUE,
        	CONSTRAINT meals_pk PRIMARY KEY ("id")
        ) `,callback);
      },  (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS "order_meal" (
        	"id " serial NOT NULL,
        	"meal_id" serial NOT NULL,
        	"order_id" serial NOT NULL,
        	CONSTRAINT _pk PRIMARY KEY ("id ")
        )`,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS "delivery_person" (
        	"id" serial NOT NULL,
        	"name" varchar(50) NOT NULL,
        	"mobile" varchar(10) NOT NULL UNIQUE,
        	"location" TEXT NOT NULL,
        	"identification" varchar(20) NOT NULL,
        	CONSTRAINT delivery_person_pk PRIMARY KEY ("id")
        ) `,callback);
      },
      (callback) => {
        client.query(`CREATE TABLE IF NOT EXISTS "orders" (
        	"id" serial NOT NULL,
        	"restaurant_id" serial NOT NULL,
        	"person_id" serial NOT NULL,
        	"order_price" varchar(25) NOT NULL,
        	"customer_id" serial NOT NULL,
        	"order_amount" int NOT NULL,
        	"order_status" varchar(25) NOT NULL,
        	"time_start" TIMESTAMP NOT NULL,
        	"time_end" TIMESTAMP NOT NULL,
        	CONSTRAINT orders_pk PRIMARY KEY ("id")
        ) `,callback);
      },(callback) => {
        client.query(`ALTER TABLE "orders" ADD CONSTRAINT
        "orders_fk0" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id");
          `,callback);
      },(callback) => {
        client.query(`ALTER TABLE "orders" ADD CONSTRAINT
        "orders_fk1" FOREIGN KEY ("person_id") REFERENCES "delivery_person"("id");
        `,callback);
      },(callback) => {
        client.query(`ALTER TABLE "orders" ADD CONSTRAINT
        "orders_fk2" FOREIGN KEY ("customer_id") REFERENCES "customers"("id");
        `,callback);
      },(callback) => {
        client.query(`ALTER TABLE "meals" ADD CONSTRAINT
        "meals_fk0" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id");
        `,callback);
      },(callback) => {
        client.query(`ALTER TABLE "order_meal" ADD CONSTRAINT
        "_fk0" FOREIGN KEY ("meal_id") REFERENCES "meals"("id");
        `,callback);
      },(callback) => {
        client.query(`ALTER TABLE "order_meal" ADD CONSTRAINT
        "_fk1" FOREIGN KEY ("order_id") REFERENCES "orders"("id");
        `,callback);
      }










    ], (err) => {
      done(err);
      return cb(err);
    });
  });
};
