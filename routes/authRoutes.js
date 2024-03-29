const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
//const authController = new AuthController();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.create);
router.get('/testusers',AuthController.indextest);

module.exports = router;