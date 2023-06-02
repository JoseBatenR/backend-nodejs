const Joi = require('joi');
const { createUserSchema } = require('../../api/schemas/user.schema');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(40);
const phone = Joi.string();
const userId = Joi.string().uuid();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: createUserSchema.required()
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
