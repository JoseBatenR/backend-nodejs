const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer")

const ServiceBase = require('./service');
const UserService = require('./user.service');
const { config } = require('./../../config/config');
const service = new UserService();

class AuthService extends ServiceBase {
  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw this.boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw this.boom.unauthorized();
    }
    const userWithoutPassord = await service.findOne(user.dataValues.id);

    return userWithoutPassord;
  }

  async signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role
    };

    const token = jwt.sign(payload, config.jwtSecret);

    return {
      user,
      token
    };
  }

  async sendRecoveryPassword(email) {
    const user = await service.findByEmail(email);

    if (!user) {
      throw this.boom.unauthorized();
    }

    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "15min" });

    const link = `http://myfrontend.com/recovery?token=${token}`;
    await service.update(user.id, { recoveryToken: token });


    const mail = {
      from: config.mstpMail,
      to: `${user.email}`,
      subject: `Hello ${user.email} recovery your password✔`,
      html: `<b>Ingresa a este link para cambiar tu contraseña => ${link}</b>`,
    }

    const result = await this.sendMail(mail);

    return result;

  }

  async changePassword(token,newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOneWithAllData(payload.sub);
      if (user.recoveryToken !== token) {
        throw this.boom.unauthorized();
      }

      await service.update(user.id, { recoveryToken : null, password: newPassword });

      return { message: 'password changed' };

    } catch (error) {
      console.log(error);
      throw this.boom.unauthorized();
    }
  }


  async sendMail(infoMail) {

    const transporter = nodemailer.createTransport({
      host: config.smtpServer,
      port: config.smtpPort,
      secure: config.smtpSecure,
      auth: {
        user: config.mstpMail,
        pass: config.smtpPassword,
      },
    });

    await transporter.sendMail(infoMail);

    return { message: 'Mail sent' };
  }
}

module.exports = AuthService;
