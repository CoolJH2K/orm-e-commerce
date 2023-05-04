// Require dotnev and sequelize
require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

// This will let the models connect to the database in MySQL
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DV_NAME,
    process.env.DV_USER,
    process.env.DV_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306
    }
  );
}

module.exports = sequelize;
