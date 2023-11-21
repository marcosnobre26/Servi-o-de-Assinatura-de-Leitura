'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'Produto 1',
        price: 10.50,
        description: 'Descrição do produto 1',
        url_image: 'https://www.example.com/image1.jpg',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Produto 2',
        price: 20.00,
        description: 'Descrição do produto 2',
        url_image: 'https://www.example.com/image2.jpg',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Produto 3',
        price: 15.75,
        description: 'Descrição do produto 3',
        url_image: 'https://www.example.com/image3.jpg',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Produto 4',
        price: 5.99,
        description: 'Descrição do produto 4',
        url_image: 'https://www.example.com/image4.jpg',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Produto 5',
        price: 35.00,
        description: 'Descrição do produto 5',
        url_image: 'https://www.example.com/image5.jpg',
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};