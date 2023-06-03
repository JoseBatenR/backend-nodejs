const Joi = require('joi');

const id = Joi.string().uuid();
const customerId = Joi.string().uuid();

const getOrderSchema = Joi.object({
  id: id.required(),
});

const createOrderSchema = Joi.object({
  customerId: customerId.required(),
});

module.exports = { getOrderSchema, createOrderSchema };
