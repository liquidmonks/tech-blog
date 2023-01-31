// Import the functions you need from the SDKs you need
const path = require("path");
const express = require("express");

// TODO: Replace with your app's Firebase project configuration
const routes = require("./controllers");
const sequelize = require("./config/connection");
//const helpers = require("./utils/helpers");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(routes);

// Syncing our database and logging a message to the user upon success
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Server listening on Port: ", PORT));
});
