// Require dotnev and sequelize
require('dotenv').config();
const Sequelize = require('sequelize');

// This will let the models connect to the database in MySQL
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true
    }
  });

module.exports = sequelize;
