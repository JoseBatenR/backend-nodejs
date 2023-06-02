
const boom = require('@hapi/boom');

const ServiceBase = require('../services/service')

class ProductsService extends ServiceBase {
  constructor() {
    super();
  }

  async create(data){
    const newProduct = await this.models.Product.create(data);
    return newProduct;
  }

  async find() {
    const products = await this.models.Product.findAll();
    return products;
  }

  async findOne(id) {
    const producto = await this.models.Product.findByPk(id,{
      include:['category']
    });
    if(!producto)
    {
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
