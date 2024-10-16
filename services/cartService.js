// ./services/cartService.js

const db = require('../models');


class CartService{
    constructor(CartModel){
        this.Cart = CartModel;
    }

    async createCart(userId, itens){
        try{
            const newCart = await this.Cart.create({
                userId:userId,
                itens:itens,
            });
            return newCart? newCart : null;
            
        }
        catch (error){
            throw error;
        }
    }

    async deleteCart(id){
        try{
            const Cart = await this.Cart.findByPk(id);

            if(Cart){
                await Cart.destroy();
                return true;
            }
            else{
                return false;
            }
            
        }
        catch(error){
            throw error;
        }
    }

    async findCartById(id){
        try{
            const Cart = await this.Cart.findByPk(id);
            return Cart? Cart: null;
        }
        catch(error){
            throw error;
        }

    }
}

module.exports = CartService;