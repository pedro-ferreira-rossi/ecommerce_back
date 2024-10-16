// ./controllers/paymentController.js

class PaymentController{
    constructor(PaymentService){
        this.paymentService = PaymentService;
    }

    async paymentByCreditCard(req,res){
        const {userId, valorTotal, status} = req.body;
        try{
            const newPaymentByCreditCard = await this.paymentService.paymentByCreditCard(userId, valorTotal, status);
            res.status(200).json(newPaymentByCreditCard);
            res.send();
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao processar o pagamento via cartão de crédito.'});
        }
    }

    async paymentByPix(req,res){
        const {userId, valorTotal, status} = req.body;
        try{
            const newPaymentByPix = await this.paymentService.paymentByPix(userId, valorTotal, status);
            res.status(200).json(newPaymentByPix);
            res.send();
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao processar o pagamento via Pix.'});
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