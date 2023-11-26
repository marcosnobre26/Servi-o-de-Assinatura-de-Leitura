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
  {
    host: config.host,
    dialect: 'mysql',
    port: config.port,
    dialectOptions: {
      connectTimeout: 60000, // Ajuste este valor conforme necessário (em milissegundos)
    },
  }
);

// Testar a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão bem-sucedida.');
  })
  .catch((err) => {
    console.error('Erro na conexão:', err);
  });

module.exports = sequelize;
