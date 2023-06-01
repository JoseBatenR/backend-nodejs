const { config } = require('../../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_CLIENT = encodeURIComponent(config.dbClient);
const URI = `${DB_CLIENT}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;


module.exports = {
  development: {
    url: URI,
    dialect: DB_CLIENT,
  },
  production: {
    url: URI,
    dialect: DB_CLIENT,
  }
}
