const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserRepository = require("../repositories/userRepository");

class AuthService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    
    static async login({ email, password }) {
        try {
            // Encontre o usuário pelo email usando a função estática
            const user = await UserRepository.findByEmail(email);
            if (!user) {
                throw new Error('Email or password invalid!');
            }

            // Verifique se a senha está correta
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error('Email or password invalid!');
            }

            // Gere o token JWT
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            console.log('Generated Token:', token); // Adicione esta linha para verificar o token gerado
            return token;
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // Rejeite o erro para que ele seja capturado na chamada da função
        }
    }

    static async create({ name, email, password }) {
        // Faça a lógica de validação se necessário

        // Criptografe a senha antes de salvar
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Chame o método create do UserRepository
        const user = await UserRepository.create({
            name,
            email,
            password: hashedPassword
        });

        return user;
    }
}

module.exports = AuthService;
