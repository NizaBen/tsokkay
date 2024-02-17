require('dotenv').config();
const express = require('express');
const routes = require('./src/routes');
const useRoutes = require('./src/utils');
const dataAccess = require('./src/dataAccess');
var bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

// parse application/json
app.use(bodyParser.json());

// Apply routes
useRoutes(app, routes);

// Set Up the Database connection
dataAccess();

app.listen(PORT, () => {
  console.log(`Application is now running on port ${PORT}`);
});
