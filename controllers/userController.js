// ./controllers/userController.js

class UserController{
    constructor(UserService){
        this.userService = UserService;
    }
    async createUser(req,res){
        //processar a request
        const {email, data_nasc, password, userType} = req.body;
        try{
            const newUser = await this.userService.create(email, data_nasc, password, userType);
            res.status(200).json(newUser);
            res.send();
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao gravar o novo usuário.'});
        }
    }

    async findAllUsers(req,res){
        try{
            const AllUsers = await this.userService.findAll();
            res.status(200).json(AllUsers);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao localizar todos os usuários.'});           
        }
    }

    async findUserById(req,res){
        const {id} = req.query;
        try{
            const User = await this.userService.findById(id);
            res.status(200).json(User);
        }
        catch(error){
            res.status(500).json({error: 'Ocorreu um erro ao localizar os usuário pelo ID.'});         
        }

    }

    //Método para login
    async login(req,res){
        const {email, password} = req.body;
        try{
            const User  = await this.userService.login(email, password);
            if (User) {
                // Se o login for bem-sucedido, devolve o token junto com os dados do usuário
                const response = {
                    user: {
                        id: User.id,
                        email: User.email,
                        userType: User.userType
                        // qualquer outro dado que você queira retornar do usuário
                    },
                    token: User.dataValues.Token, // o token gerado
                };
                res.status(200).json(response);
            } else {
                res.status(400).json({ error: 'Credenciais inválidas' });
            }
        }
        catch(error){
            res.status(500).json({error: 'Erro ao logar o usuário'});
        }
    }
}

module.exports = UserController;