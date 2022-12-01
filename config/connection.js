require('dotenv').config();

// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
    // localhost
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port:3305,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;