const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const UserModel = require('./UserModel');
const ProductModel = require('./ProductModel');

class SignatureModel extends Model {}

SignatureModel.init({
    status: {
        type: DataTypes.ENUM('active', 'inativo', 'pending', 'chargeback', 'canceled'),
        allowNull: false,
    },
    last_payment: {
    type: DataTypes.DATE,
    allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: ProductModel,
        key: 'id',
      },
    },
}, {
    sequelize,
    modelName: 'signature',
    tableName: 'signatures',
    timestamps: false,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
});

// Adiciona a associação com a tabela de usuários
SignatureModel.belongsTo(UserModel, { foreignKey: 'user_id' });

// Adiciona a associação com a tabela de produtos
SignatureModel.belongsTo(ProductModel, { foreignKey: 'product_id' });

module.exports = SignatureModel;
