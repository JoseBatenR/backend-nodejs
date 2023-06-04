const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');

const UserService = require('../../../api/services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done(service.boom.unauthorized(), false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done(service.boom.unauthorized(), false);
      }
      const userWithoutPassord = await service.findOne(user.dataValues.id);
      done(null, userWithoutPassord);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
