
const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

const ServiceBase = require('../services/service')

class ProductsService extends ServiceBase {
  constructor() {
    super();
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock : faker.datatype.boolean()
      });

    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    };
    this.products.push(newProduct);
    return newProduct;

  }

  async find() {
    const query = 'SELECT * FROM TASKS';
    const response = await this.pool.query(query);
    return response.rows;
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
