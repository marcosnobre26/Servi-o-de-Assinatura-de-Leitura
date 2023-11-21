const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserRepository = require("../repositories/userRepository");

class AuthService {
    static async login({ email, password }) {
        // Encontre o usuário pelo email usando a função estática
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            throw new Error('Email or password invalid');
        }

        // Verifique se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Email or password invalid');
        }
        console.log('User ID:', user.id);
        // Gere o token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
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
