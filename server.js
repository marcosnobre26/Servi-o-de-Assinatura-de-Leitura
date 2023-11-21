const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // importando as rotas a partir do arquivo index.js
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', routes); // definindo a rota base como '/api'

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});