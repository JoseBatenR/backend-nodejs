const { Pool } = require('pg');


  const pool = new Pool({
    host:'localhost',
    port:5432,
    user:'jose',
    password: 'admin123',
    database: 'STORE'
  });

  module.exports = pool;




