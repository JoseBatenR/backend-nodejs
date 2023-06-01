const ServiceBase = require('../services/service');

class CustomerService extends ServiceBase {
  constructor() {
    super();
  }

  async find() {
    const rta = await this.models.Customer.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await this.models.Customer.findByPk(id);
    if (!user) {
      throw this.boom.notFound('customer not found');
    }
    return user;
  }

  async create(data) {
    const newCustomer = await this.models.Customer.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }

}

module.exports = CustomerService;
