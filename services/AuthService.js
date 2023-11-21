const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserRepository = require("../repositories/userRepository");

class AuthService {
    static async login({ email, password }) {
        try {
            const user = await UserRepository.findByEmail(email);

            if (!user) {
                throw new Error('Email or password invalid');
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                throw new Error('Email or password invalid');
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            console.log('Token generated successfully:', token);

            return token;
        } catch (error) {
            console.error('Error during login:', error);
            throw error; // Re-throw the error to be caught by the calling function
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
