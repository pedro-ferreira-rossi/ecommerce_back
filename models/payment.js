// models/payment.js
const Sequelize = require('sequelize');

module.exports = (sequelize) =>{
    const Payment = sequelize.define('Payment',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        valorTotal: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        metodoPagamento: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
        },

    });

    return Payment;
};