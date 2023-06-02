const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(40);
const image = Joi.string().uri();
const description = Joi.string().min(10)
const price = Joi.number().min(10);
const categoryId = Joi.string().uuid();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image : image.required(),
  description: description.required(),
  categoryId : categoryId.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image : image,
  description,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
