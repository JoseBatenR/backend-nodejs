const { models } = require('../../libs/sequalize');

class ServiceBase{
  constructor() {
    this.models = models;
  }

}
module.exports = ServiceBase;
