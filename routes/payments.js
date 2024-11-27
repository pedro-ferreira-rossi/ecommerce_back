// routes/payments.js
var express = require('express');
var router = express.Router();
const auth = require('../auth');

const db = require('../models') // carregando o banco de dados

//Carregando as classes service e controller do carrinho
const PaymentService = require('../services/paymentService');
const PaymentController = require('../controllers/paymentController');

//Construir os objetos a partir das classes
const paymentService = new PaymentService(db.Payment);
const paymentController = new PaymentController(paymentService);

router.get('/', function(req, res, next) {
    res.send('Módulo de pagamento rodando.');
});

router.post('/pagamento', auth.verifyToken, async (req,res)=>{
    paymentController.payment(req,res);
});

router.get('/consultarPagamento', auth.verifyToken, async (req,res)=>{
    paymentController.findPaymentById(req,res);
});


module.exports = router;