const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require('./routes.js');
const createTables = require('../database/createTable.js');
app.use(routes);
app.use(express.static('public'));
app.use(bodyParser.json());


createTables( err => {
  if (err) throw err;
  app.listen(PORT, () => {
    console.log('Our app is running on http://localhost:' + PORT); // eslint-disable-line no-console
  });
});
