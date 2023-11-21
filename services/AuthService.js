const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserRepository = require("../repositories/userRepository");

class AuthService {
    static async login(email, password) {

        const user = await UserRepository.findByEmail(email);
        if (!user) {
            throw new Error('Email or password invalid');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Email or password invalid');
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
}

module.exports = AuthService;