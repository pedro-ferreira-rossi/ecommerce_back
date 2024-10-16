// routes/carts.js
var express = require('express');
var router = express.Router();

const db = require('../models') // carregando o banco de dados

//Carregando as classes service e controller do carrinho
const CartService = require('../services/cartService');
const CartController = require('../controllers/cartController');

//Construir os objetos a partir das classes
const cartService = new CartService(db.Cart);
const cartController = new CartController(cartService);

router.get('/', function(req, res, next) {
    res.send('Módulo de carrinhos rodando.');
});

//Rota para criar novo carrinho
router.post('/novocarrinho', async (req,res)=>{
    cartController.createCart(req,res);
});

router.delete('/deletecart', async(req,res)=>{
    cartController.deleteCart(req,res);
});

router.get('/consultarCarrinho', async (req,res)=>{
    cartController.findCartById(req,res);
});


module.exports = router;