const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class UserModel extends Model {}

UserModel.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
}, {
  sequelize,
  modelName: 'user',
  tableName: 'users', // nome da tabela
  timestamps: false, // adiciona as colunas createdAt e updatedAt
  createdAt: 'created_at', // renomeia a coluna createdAt para created_at
  updatedAt: 'updated_at', // renomeia a coluna updatedAt para updated_at
});

module.exports = UserModel;