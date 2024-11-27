// ./controllers/paymentController.js

class PaymentController{
    constructor(PaymentService){
        this.paymentService = PaymentService;
    }

    async payment(req,res){
        const {userId, valorTotal, metodoPagamento, status} = req.body;
        try{
            const newPayment = await this.paymentService.payment(userId, valorTotal, metodoPagamento, status);
            res.status(200).json(newPayment);
            res.send();
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao processar o pagamento.'});
        }
    }

    async findPaymentById(req,res){
        const {id} = req.query;
        try{
            const Payment = await this.paymentService.findPaymentById(id);
            res.status(200).json(Payment);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao localizar o pagamento pelo ID.'});         
        }

    }
}

module.exports = PaymentController;