'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('signatures', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM('active', 'inativo', 'pending', 'chargeback', 'canceled'),
        allowNull: false,
      },
      last_payment: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Se o nome da tabela for diferente, ajuste aqui
          key: 'id',
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'products', // Se o nome da tabela for diferente, ajuste aqui
          key: 'id',
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Adiciona o índice para a chave estrangeira user_id
    await queryInterface.addIndex('signatures', ['user_id']);

    // Adiciona o índice para a chave estrangeira product_id
    await queryInterface.addIndex('signatures', ['product_id']);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('signatures');
  }
};
