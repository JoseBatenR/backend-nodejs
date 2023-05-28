const express = require('express');
const router = express.Router();


router.get('/:categoryId/products/:productId', (request, response) => {
  const { categoryId, productId } = request.params; // mediante destructuración
  response.json([{
    categoryId,
    productId,
    name: `Producto ${productId}`,
    price: 1000
  }]);
});

module.exports = router;
