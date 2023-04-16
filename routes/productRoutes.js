const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/',authMiddleware, ProductController.index);
router.get('/:id',authMiddleware, ProductController.get);
router.post('/',authMiddleware, ProductController.create);
router.put('/:id',authMiddleware, ProductController.update);
router.delete('/:id',authMiddleware, ProductController.delete);

module.exports = router;