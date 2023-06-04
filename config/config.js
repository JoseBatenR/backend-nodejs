require('dotenv').config();

const config = {
  port : process.env.PORT,
  env: process.env.NODE_ENV || 'dev',
  isProd: (process.env.NODE_ENV || 'dev') == 'prodution',
  dbUrl : (process.env.NODE_ENV || 'dev') == 'prodution' ? process.env.DB_URL : process.env.DB_URL //cambiar la url dependiendo de las variables de entorno del proveedor
}
module.exports = { config };
