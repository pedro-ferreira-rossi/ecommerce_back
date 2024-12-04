// models/user.js
const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const User = sequelize.define('User',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        email:{
            type: Sequelize.STRING,
            unique: true,
            allowNull:false
        },
        data_nasc:{
            type: Sequelize.DATE,
            allowNull: true
        },
        password:{
            type: Sequelize.STRING,
            allowNull:false
        },
        userType:{
            type: Sequelize.STRING,
            allowNull:false,
            validate: {
                isIn: [['normal', 'fornecedor']],
            }
        }
    });
    return User;
};