const Joi = require('joi');


const id = Joi.string().uuid();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(40);
const phone = Joi.string();
const userId = Joi.string().uuid();
//const email = Joi.string().email();
//const password = Joi.string();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required()
});

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema };
