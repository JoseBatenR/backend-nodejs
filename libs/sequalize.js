const { Sequelize } = require('sequelize');
const setupModels  = require('../api/db/models/index');

const { config } = require('../config/config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_CLIENT = encodeURIComponent(config.dbClient);
const URI = `${DB_CLIENT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: DB_CLIENT,
  logging: true
});

setupModels(sequelize);
//sequelize.sync();

module.exports = sequelize;
