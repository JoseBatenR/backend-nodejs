const express = require('express');

const OrderPositionService = require('../../api/services/orderposition.service');
const validatorHandler = require('../middlewares/validator.handler');
const { addOrderPositionSchema, getOrderPositionSchema } = require('../schemas/orderposition.schema');

const router = express.Router();
const orderPosition = new OrderPositionService();


router.get(
  '/:id',
  validatorHandler(getOrderPositionSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const order = await orderPosition.findOne(id);
      response.json(order);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(addOrderPositionSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newOrderPosition = await orderPosition.create(body);
      response.status(201).json(newOrderPosition);
    } catch (error) {
      next(error);
    }
  }
);




module.exports = router;
