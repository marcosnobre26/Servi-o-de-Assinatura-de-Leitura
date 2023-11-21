const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

const authMiddleware = async (req, res, next) => {
    try {
      const token = req.header('Authorization');
      if (!token) {
        throw new Error();
      }
      const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
  
      if (!user) {
        throw new Error();
      }
  
      req.token = token;
      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Authentication failed' });
    }
};

module.exports = authMiddleware;