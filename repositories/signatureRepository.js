const Signature = require('../models/SignatureModel');
const User = require('../models/UserModel');
const Product = require('../models/ProductModel');
const debug = require('debug')('signatureRepository');

class SignatureRepository {
    
    async index() {
      const signatures = await Signature.findAll();
      return signatures;
    }
  
    async get(userId) {
      const signature = await Signature.findByPk(userId);
    
      return signature;
    }
    
    async getByUser(userId) {
      const signature = await Signature.findAll({
        where: { user_id: userId },
        include: [
          { model: User, attributes: ['id', 'name', 'email'] },
          { model: Product, attributes: ['id', 'name'] },
        ],
      });
    
      return signature;
    }
  
    async create(signature) {
      const newSignature = await Signature.create(signature);
      return newSignature;
    }
  
    async update(id, signature) {
        debug('update');
        const updatedRows = await Signature.update(signature, { where: { id } });
        if (updatedRows[0] === 0) {
            return null;
        }
        const updatedSignature = await Signature.findByPk(id);
        return updatedSignature;
    }
  
    async delete(id) {
      const rowsDeleted = await Signature.destroy({ where: { id } });
      if (rowsDeleted === 0) {
        return null;
      }
      return;
    }
}
  
module.exports = SignatureRepository;