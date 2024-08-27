const express = require('express');
const { getProducts, getProductDetails } = require('../controllers/productsController');
const router = express.Router();

// Route to get top N products in a category
router.get('/companies/:companyname/categories/:categoryname/products', getProducts);

// Route to get details of a specific product
router.get('/companies/:companyname/categories/:categoryname/products/:productid', getProductDetails);

module.exports = router;
