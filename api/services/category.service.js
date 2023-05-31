const ServiceBase = require('../services/service')

const sequalize = require('../../libs/sequalize');

class CategoryService extends ServiceBase {

  constructor() {
    super();
  }
  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM TASKS';
    const [data] = await this.sequalize.query(query);
    return data;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = CategoryService;
