const { Sequelize } = require('sequelize');
const config = require('./config/config.json'); // Atualize o caminho conforme necessário

const { username, password, database, host, dialect } = config.production;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

// Teste de conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar:', error);
  } finally {
    // Feche a conexão, se necessário
    // await sequelize.close();
  }
}

// Execute o teste de conexão
testConnection();
