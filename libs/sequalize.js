const { Sequelize } = require('sequelize');
const setupModels  = require('../api/db/models/index');

const { config } = require('../config/config');

const dialect = 'postgres';

const options = {
  dialect: dialect,
  logging: false
}

const sequelize = new Sequelize(config.dbUrl, options);

setupModels(sequelize);
//sequelize.sync();

module.exports = sequelize;
