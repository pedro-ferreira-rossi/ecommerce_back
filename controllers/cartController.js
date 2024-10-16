// ./controllers/cartController.js

class CartController{
    constructor(CartService){
        this.cartService = CartService;
    }

    async createCart(req,res){
        const {userId, itens} = req.body;
        try{
            const newCart = await this.cartService.createCart(userId, itens);
            res.status(200).json(newCart);
            res.send();
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao cria novo carrinho de compras.'});
        }
    }

    async deleteCart(req,res){
        const {id} = req.query;
        try{
            const deletedCart = await this.cartService.deleteCart(id);
            res.status(200).json(deletedCart);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao excluir o carrinho.'});           
        }
    }

    async findCartById(req,res){
        const {id} = req.query;
        try{
            const Cart = await this.cartService.findCartById(id);
            res.status(200).json(Cart);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao localizar o carrinho pelo ID.'});         
        }

    }
}

module.exports = CartController;