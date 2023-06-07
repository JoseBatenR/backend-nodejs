const express = require('express');
const passport = require('passport');

const OrderService = require('../../api/services/order.service');
const router = express.Router();
const service = new OrderService();


router.get('/my-orders',
passport.authenticate('jwt', {session: false}),
  async (request, response, next) => {
  try {
    const user = request.user;
    const myOrders = await service.findByUser(user.sub);
    response.json(myOrders);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
