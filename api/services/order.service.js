
const ServiceBase = require('../services/service');

class OrderService extends ServiceBase {

  constructor(){
    super()
  }

  async create(data) {
    const newOrder = await this.models.Order.create(data);
    return newOrder;
  }

  async find() {
    const orders = await this.models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await this.models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    if (!order) {
      throw this.boom.notFound('Order not found');
    }

    return order;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const modelUpdate = await model.update(changes);
    return modelUpdate;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { response: true };
  }

}

module.exports = OrderService;
