require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: (process.env.NODE_ENV || 'dev') == 'prodution',
  port: process.env.PORT || 3000,
  dbUser:  process.env.DB_USER,
  dbPassword:  process.env.DB_PASSWORD,
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  process.env.DB_PORT,
  dbClient: process.env.DB_CLIENT,
  dbUrl : (process.env.NODE_ENV || 'dev') == 'prodution' ? process.env.POSTGRES_URL : process.env.DB_URL
}
module.exports = { config };
