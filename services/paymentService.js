// ./services/paymentService.js

const db = require('../models');


class PaymentService{
    constructor(PaymentModel){
        this.Payment = PaymentModel;
    }

    async payment(userId, valorTotal, metodoPagamento, status){
        try{
            const newPayment = await this.Payment.create({
                userId:userId,
                valorTotal:valorTotal,
                metodoPagamento:metodoPagamento,
                status:status
            });
            return newPayment? newPayment : null;
            
        }
        catch (error){
            throw error;
        }
    }

    async findPaymentById(id){
        try{
            const Payment = await this.Payment.findByPk(id);
            return Payment? Payment: null;
        }
        catch(error){
            throw error;
        }

    }
}

module.exports = PaymentService;