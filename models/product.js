// models/products.js
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const Product = sequelize.define('Product',{
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: Sequelize.STRING,
            allowNull: false
        },
        preco: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        estoque: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    });
    return Product;
};