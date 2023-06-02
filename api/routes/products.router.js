const express = require('express');
const ProductsService = require('./../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

const router = express.Router();
const service = new ProductsService();


router.get('/', async (request, response, next) => {
  try {
    const products = await service.find();
    response.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const product = await service.findOne(id);
      response.json(product);
    } catch (error) {
      next(error);
    }
  }
);


router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newProduct = await service.create(body);
      response.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  }
);

// objetos de tipo parcial
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = request.body;
      const product = await service.update(id, body);
      response.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);


module.exports = router;
