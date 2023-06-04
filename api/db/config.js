const { config } = require('../../config/config');

const dialect = 'postgres';

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
