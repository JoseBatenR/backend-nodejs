const boom = require('@hapi/boom');
const ServiceBase = require('../services/service');
const bycript = require('bcrypt');

class UserService extends ServiceBase {
  constructor() {
    super();
  }
  async create(data) {
    const hash = await bycript.hash(data.password,10);
    const newUser = await this.models.User.create({
      ...data,
      password : hash
    });
    /* Eliminar password del modelo*/
    delete newUser.dataValues.password;

    return newUser;
  }
  async find() {
    const data = await this.models.User.findAll({
      include : ['customer']
    });
    return data;
  }
  async findOne(id) {
    const user = await this.models.User.findByPk(id);
    if (!user) {
      throw  boom.notFound('User not found');
    }
    return user;
  }
  async update(id, changes) {
    const user = await this.findOne(id);
    const data = await user.update(changes);
    return data;
  }
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}
module.exports = UserService;
