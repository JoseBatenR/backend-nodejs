const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const customersRoute = require('./customer.router');
const orderRoute = require('./order.router');
const authRouter = require('./auth.router');
const profileRouter = require('./profile.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/customers', customersRoute);
  router.use('/orders', orderRoute);
  router.use('/auth', authRouter);
  router.use('/profile',profileRouter);


}

module.exports = routerApi;
