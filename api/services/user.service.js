
const ServiceBase = require('../services/service');

class UserService extends ServiceBase {
  constructor() {
    super();
  }
  async create(data) {
    return data;
  }
  async find() {
    const query = 'SELECT * FROM TASKS';
    const response = await this.pool.query(query);
    return response.rows;
  }
  async findOne(id) {
    return { id };
  }
  async update(id, changes) {
    return { id, changes, };
  }
  async delete(id) {
    return { id };
  }
}
module.exports = UserService;
