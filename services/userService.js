// ./services/userService.js
const auth = require('../auth');
const bcrypt = require('bcrypt');

const db = require('../models');

class UserService{
    constructor(UserModel){
        this.User = UserModel;
    }

    async create(email, data_nasc, password){
        try{
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await this.User.create({
                email:email,
                data_nasc:data_nasc,
                password:hashedPassword
            });
            return newUser? newUser : null;
            
        }
        catch (error){
            throw error;
        }
    }

    //Método para retornar todos os usuários
    async findAll()
    {
        try{
            const AllUsers = await this.User.findAll();
            return AllUsers? AllUsers : null;
        }
        catch(error){
            throw error;
        }

    }

    //Método para retornar o usuário pelo id
    async findById(id){
        try{
            const User = await this.User.findByPk(id);
            return User? User: null;
        }
        catch(error){
            throw error;
        }

    }

    //Método para login
    async login(email, password){
        try{
            const User = await this.User.findOne({
            where : {email}
            });
            //Se o usuário existe, ver se a senha está ok
            if(User){
                console.log('E-mail recebido:', email);
                console.log('Senha recebida:', password);
                console.log('Senha armazenada (hash):', User.password);
                const isValidPassword = await bcrypt.compare(password, User.password);
                if(isValidPassword){
                    const token = await auth.generateToken(User);
                    User.dataValues.Token = token;
                    User.dataValues.password = '';
                } else {
                    throw new Error('Senha inválida');
                }
            }
            return User? User:null;
        }
        catch(error){
            throw error;
        }
    
    }
}

module.exports = UserService;