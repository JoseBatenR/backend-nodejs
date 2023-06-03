const express = require('express');

const OrderService = require('../../api/services/order.service');
const OrderPositionService = require('../../api/services/orderposition.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getOrderSchema,createOrderSchema} = require('../schemas/order.schema');
const { addOrderPositionSchema } = require('../schemas/orderposition.schema');

const router = express.Router();
const service = new OrderService();
const orderPosition = new OrderPositionService();

router.get(
  '/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const order = await service.findOne(id);
      response.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createOrderSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newOrder = await service.create(body);
      response.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/add-position',
  validatorHandler(addOrderPositionSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newOrder = await orderPosition.create(body);
      response.status(201).json(newOrder);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
