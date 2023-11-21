const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ProductModel extends Model {}

ProductModel.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    url_image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('ativo', 'inativo'),
        allowNull: false
    }
}, {
  sequelize,
  modelName: 'product',
  tableName: 'products', // nome da tabela
  timestamps: true, // adiciona as colunas createdAt e updatedAt
  createdAt: 'created_at', // renomeia a coluna createdAt para created_at
  updatedAt: 'updated_at', // renomeia a coluna updatedAt para updated_at
});

module.exports = ProductModel;