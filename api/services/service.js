const pool = require('../../libs/postgress.pool');

class ServiceBase{
  constructor() {
    this.pool = pool;
    this.pool.on('error',(error)=>{ console.error(error)});
  }

}
module.exports = ServiceBase;
