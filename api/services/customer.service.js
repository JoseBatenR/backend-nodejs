const ServiceBase = require('../services/service');
const bycript = require('bcrypt');

class CustomerService extends ServiceBase {
  constructor() {
    super();
  }

  async find() {
    const rta = await this.models.Customer.findAll({
      include: ['user']
    });
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
    const hash = await bycript.hash(data.user.password, 10);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    };

    const newCustomer = await this.models.Customer.create(newData, {
      include: ['user']
    });

    /* Eliminar password del modelo*/
    delete newCustomer.dataValues.user.dataValues.password;

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
