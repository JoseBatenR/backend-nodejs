require('dotenv').config();

const config = {
  port: process.env.PORT,
  env: process.env.NODE_ENV || 'dev',
  isProd: (process.env.NODE_ENV || 'dev') == 'prodution',
  dbUrl: (process.env.NODE_ENV || 'dev') == 'prodution' ? process.env.DB_URL : process.env.DB_URL, //cambiar la url dependiendo de las variables de entorno del proveedor
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  smtpPassword: process.env.SMTP_PASSWORD,
  mstpMail: process.env.SMTP_USER,
  smtpServer: process.env.SMTP_SERVER,
  smtpPort: process.env.SMTP_PORT,
  smtpSecure: process.env.SMTP_SECURE == true
}
module.exports = { config };
