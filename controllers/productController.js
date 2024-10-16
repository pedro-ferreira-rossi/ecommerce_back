// ./controllers/productController.js

class ProductController{
    constructor(ProductService){
        this.productService = ProductService;
    }

    async createProduct(req,res){
        const {nome, descricao, preco, estoque} = req.body;
        try{
            const newProduct = await this.productService.createProduct(nome, descricao, preco, estoque);
            res.status(200).json(newProduct);
            res.send();
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao gravar o novo produto.'});
        }
    }

    async findAllProducts(req,res){
        try{
            const AllProducts = await this.productService.findAllProducts();
            res.status(200).json(AllProducts);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao localizar todos os produtos.'});           
        }
    }

    async updateProduct(req,res){
        const {id} = req.query
        try{
            const updateProduct = await this.productService.updateProduct(id, req.body);
            res.status(200).json(updateProduct);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao atualizar o produto.'});           
        }
    }

    async deleteProduct(req,res){
        const {id} = req.query;
        try{
            const deletedProduct = await this.productService.deleteProduct(id);
            res.status(200).json(deletedProduct);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao deletar o produto.'});           
        }
    }
}

module.exports = ProductController;