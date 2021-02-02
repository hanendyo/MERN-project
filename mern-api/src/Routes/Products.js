const express = require('express');

const productsController = require('../Controller/Products')

const router = express.Router();


// CREATE / POSt
router.post('/product', productsController.createProduct)

// GET / READ
router.get('/products', productsController.getProducts)

module.exports = router;