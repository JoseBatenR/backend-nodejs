const { models } = require('../../libs/sequalize');
const { Op } = require('sequelize');

const boom = require('@hapi/boom');
class ServiceBase {
  constructor() {
    this.models = models;
    this.boom = boom;
    this.Op = Op;
  }

}
module.exports = ServiceBase;
