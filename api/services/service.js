const { models } = require('../../libs/sequalize');
const boom = require('@hapi/boom');
class ServiceBase{
  constructor() {
    this.models = models;
    this.boom = boom;
  }

}
module.exports = ServiceBase;
