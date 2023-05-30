const { Client } = require('pg');

async function getConnection(){
  const cliente = new Client({
    host:'localhost',
    port:5432,
    user:'jose',
    password: 'admin123',
    database: 'STORE'
  });

  await cliente.connect();
  return cliente;
}

module.exports = getConnection;


