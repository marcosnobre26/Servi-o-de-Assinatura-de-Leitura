const AuthService = require('../services/AuthService');

//const authService = new AuthService();

class AuthController {
    async login(req, res, next) {
      try {
        const { email, password } = req.body;
        const token = await AuthService.login(email, password); // <--- correção aqui
        console.log(token);
        return res.status(200).json({ token });
      } catch (err) {
        return res.status(400).json({ error: err.message });
      }
    }
  }

module.exports = new AuthController();