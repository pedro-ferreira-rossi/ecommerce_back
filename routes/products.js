// routes/products.js
var express = require('express');
var router = express.Router();

const db = require('../models') // carregando o banco de dados

//Carregando as classes service e controller do produto
const ProductService = require('../services/productService');
const ProductController = require('../controllers/productController');

//Construir os objetos a partir das classes
const productService = new ProductService(db.Product);
const productController = new ProductController(productService);

router.get('/', function(req, res, next) {
  res.send('Módulo de produtos rodando.');
});

router.post('/novoproduto', async (req,res)=>{
  productController.createProduct(req,res);
});

router.get('/allproducts', async(req,res)=>{
  productController.findAllProducts(req,res);
});

router.put('/updateproduct', async (req,res)=>{
  productController.updateProduct(req,res);
});

router.delete('/deleteproduct', async(req,res)=>{
  productController.deleteProduct(req,res);
});

module.exports = router;