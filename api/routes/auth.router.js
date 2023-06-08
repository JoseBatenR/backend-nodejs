const express = require('express');
const passport = require('passport');
const AuthService = require('./../services/auth.service')

const router = express.Router();
const service = new AuthService();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery',
  async (request, response, next) => {
    try {
      const { email } = request.body;
      const responseMail = await service.sendRecoveryPassword(email);
      response.json(responseMail);
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
