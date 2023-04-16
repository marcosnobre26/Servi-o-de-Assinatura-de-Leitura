const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', UserController.getAllUsers);
router.get('/:id',authMiddleware, UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

module.exports = router;