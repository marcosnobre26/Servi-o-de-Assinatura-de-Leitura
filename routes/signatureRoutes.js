const express = require('express');
const router = express.Router();
const SignatureController = require('../controllers/SignatureController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',authMiddleware, SignatureController.index);
router.get('/:id',authMiddleware, SignatureController.get);
router.post('/',authMiddleware, SignatureController.create);
router.put('/:id',authMiddleware, SignatureController.update);
router.delete('/:id',authMiddleware, SignatureController.delete);
router.get('/user/:id',authMiddleware, SignatureController.getByUser);

module.exports = router;