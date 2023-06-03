
const ServiceBase = require('../services/service');

class OrderPositionService extends ServiceBase {
  constructor() {
    super()
  }

  async create(data) {
    const newOrderPosition = await this.models.OrderPosition.create(data);
    return newOrderPosition;
  }

  async findOne(id) {
    const orderPosition = await this.models.OrderPosition.findByPk(id);
    if (!orderPosition) {
      throw this.boom.notFound('Order not found');
    }

    return orderPosition;
  }

}
module.exports = OrderPositionService;
