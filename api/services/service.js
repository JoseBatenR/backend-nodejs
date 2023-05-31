const sequalize = require('../../libs/sequalize');

class ServiceBase{
  constructor() {
    this.sequalize = sequalize;
  }

}
module.exports = ServiceBase;
