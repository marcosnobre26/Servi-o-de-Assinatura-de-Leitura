const { Sequelize } = require('sequelize');
const path = require('path');

// Importa as configurações do ambiente atual a partir do arquivo config.json
const env = process.env.NODE_ENV || 'development';
const configPath = path.join(__dirname, '..', 'config', 'config.json');
const config = require(configPath)[env];

// Cria uma nova instância do Sequelize usando as configurações do ambiente atual
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

module.exports = sequelize;