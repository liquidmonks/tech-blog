const Sequelize = require("sequelize");
require("dotenv").config();

// Connect to database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });

// Import models
module.exports = sequelize;
