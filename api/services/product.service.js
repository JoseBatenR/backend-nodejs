
const boom = require('@hapi/boom');

const ServiceBase = require('../services/service')

class ProductsService extends ServiceBase {
  constructor() {
    super();
  }


  async find() {
    const query = 'SELECT * FROM TASKS';
    const [data] = await this.sequalize.query(query);
    return data;
  }

  async findOne(id) {
    const producto = this.products.find(item => item.id == id);
    if(!producto)
    {
      throw boom.notFound('Product not found');
    }
    if(producto.isBlock){
      throw boom.conflict('Product is blocked');
    }
    return producto;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...changes
    };

    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }

    this.products.splice(index, 1);
    return { id };
  }
}
module.exports = ProductsService;
