const express =require('express');
const router =express.Router();
const productController = require('../controller/users');




router
.get('/',productController.getProducts)
.get('/:id',productController.getProduct)
.delete('/:id',productController.deleteProduct)
.put('/:id',productController.replaceProduct)
.patch('/:id',productController.updateProduct)

exports.router=router;