const Product = require('../models/ProductModel');
const debug = require('debug')('productRepository');

class ProductRepository {
    
    async index() {
      const products = await Product.findAll();
      return products;
    }
  
    async get(id) {
      const product = await Product.findByPk(id);
      return product;
    }
  
    async create(product) {
      const newProduct = await Product.create(product);
      return newProduct;
    }
  
    async update(id, product) {
        debug('update');
        const updatedRows = await Product.update(product, { where: { id } });
        if (updatedRows[0] === 0) {
            return null;
        }
        const updatedProduct = await Product.findByPk(id);
        return updatedProduct;
    }

    static async findByEmail(email) {
        return await User.findOne({
            where: {
                email: email
            }
        });
    }
  
    async delete(id) {
      const rowsDeleted = await Product.destroy({ where: { id } });
      if (rowsDeleted === 0) {
        return null;
      }
      return;
    }
}
  
module.exports = ProductRepository;