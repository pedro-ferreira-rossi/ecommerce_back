// ./services/productService.js

const db = require('../models');

class ProductService{
    constructor(ProductModel){
        this.Product = ProductModel;
    }

    async createProduct(nome, descricao, preco, estoque){
        try{
            const newProduct = await this.Product.create({
                nome:nome,
                descricao:descricao,
                preco:preco,
                estoque:estoque
            });
            return newProduct? newProduct : null;
            
        }
        catch (error){
            throw error;
        }
    }

    async findAllProducts(){
        try{
            const AllProducts = await this.Product.findAll();
            return AllProducts? AllProducts : null;
        }
        catch(error){
            throw error;
        }

    }

    async updateProduct(id, data){
        try{
            const Product = await this.Product.findByPk(id);

            if(Product){
                return await Product.update(data);
            }
            else{
                return null
            }
            
        }
        catch(error){
            throw error;
        }
    }

    async deleteProduct(id){
        try{
            const Product = await this.Product.findByPk(id);

            if(Product){
                await Product.destroy();
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
}

module.exports = ProductService;