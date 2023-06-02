const ServiceBase = require('../services/service')

class CategoryService extends ServiceBase {

  constructor() {
    super();
  }
  async create(data) {
    const newCategory = await this.models.Category.create(data);
    return newCategory;
  }

  async find() {
    const products = await this.models.Category.findAll();
    return products;
  }

  async findOne(id) {
    const categorie = await this.models.Category.findByPk(id,
      {
        include: ['products']
      });
    if (!categorie) {
      throw this.boom.notFound('Categorie not found');
    }
    return categorie;
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
    return { response: true };
  }

}

module.exports = CategoryService;
