// ./services/paymentService.js

const db = require('../models');


class PaymentService{
    constructor(PaymentModel){
        this.Payment = PaymentModel;
    }

    async paymentByCreditCard(userId, valorTotal, status){
        try{
            const newPaymentByCreditCard = await this.Payment.create({
                userId:userId,
                valorTotal:valorTotal,
                metodoPagamento: "Cartão de crédito",
                status:status
            });
            return newPaymentByCreditCard? newPaymentByCreditCard : null;
            
        }
        catch (error){
            throw error;
        }
    }

    async paymentByPix(userId, valorTotal, status){
        try{
            const newPaymentByPix = await this.Payment.create({
                userId:userId,
                valorTotal:valorTotal,
                metodoPagamento: "Pix",
                status:status
            });
            return newPaymentByPix? newPaymentByPix : null;
            
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