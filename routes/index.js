const express = require('express');
const userRoutes = require('./userRoutes');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('API rodando!');
});

router.use('/users', userRoutes);

module.exports = router;