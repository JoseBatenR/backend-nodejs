const Joi = require('joi');

const id= Joi.string().uuid();
const orderId = Joi.string().uuid();
const productId = Joi.string().uuid();
const quantity = Joi.number().min(1);


const getOrderPositionSchema = Joi.object({
  id: id.required(),
});

const addOrderPositionSchema = Joi.object({
  orderId : orderId.required(),
  productId : productId.required(),
  quantity : quantity.required()

});



module.exports = { getOrderPositionSchema, addOrderPositionSchema };
