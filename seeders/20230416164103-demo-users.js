'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'João Silva',
        email: 'joao.silva@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Maria Souza',
        email: 'maria.souza@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pedro Santos',
        email: 'pedro.santos@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ana Oliveira',
        email: 'ana.oliveira@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucas Pereira',
        email: 'lucas.pereira@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};