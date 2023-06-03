const { config } = require('../../config/config');

const dialect = 'postgres';
console.log(config.dbUrl);

module.exports = {
  development: {
    url: config.dbUrl,
    dialect: dialect
  },
  production: {
    url: config.dbUrl,
    dialect: dialect,
    ssl: {
      rejectUnauthorized: false,
      requestCert: true
    },
  }
}
