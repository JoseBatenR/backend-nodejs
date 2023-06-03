
const boom = require('@hapi/boom');

const ServiceBase = require('../services/service')

class ProductsService extends ServiceBase {
  constructor() {
    super();
  }

  async create(data) {
    const newProduct = await this.models.Product.create(data);
    return newProduct;
  }

  async find(query) {
    const { limit, offset } = query;

    const options = {
      include: ['category'],
      where: {}
    };



    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const {price} = query;
    if(price){
      options.where.price = price;
    }

    const {price_min, price_max} = query;

    if(price_min && price_max){
      options.where.price = {
        [this.Op.gte]: price_min,
        [this.Op.lte]: price_max
      }
    }


    const products = await this.models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const producto = await this.models.Product.findByPk(id, {
      include: ['category']
    });
    if (!producto) {
      throw boom.notFound('Product not found');
    }
    return producto;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const modelUpdate = await model.update(changes);
    //const
    return modelUpdate;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}
module.exports = ProductsService;
