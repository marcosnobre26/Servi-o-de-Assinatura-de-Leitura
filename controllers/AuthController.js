const AuthService = require('../services/AuthService');

//const authService = new AuthService();

class AuthController {
  async login(req, res, next) {
    try {
        const { email, password } = req.body;
        const token = await AuthService.login({ email, password });
        return res.status(200).json({ token });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
  }

    async indextest(req, res, next) {
      try {
          const users = await 'Marcos Nobre Aprendendo AWS';
          res.status(200).json(users);
      } catch (error) {
          next(error);
      }
    }

    async create(req, res, next) {
      try {
          const { name, email, password } = req.body;
          const user = await AuthService.create({ name, email, password });
          return res.status(201).json({ user });
      } catch (err) {
          return res.status(400).json({ error: err.message });
      }
    }
  }

module.exports = new AuthController();