const UserRepository = require("../repositories/userRepository");
const ProductRepository = require("../repositories/productRepository");

class ProductService {
    constructor() {
      this.productRepository = new ProductRepository();
    }
  
    async index() {
      return await this.productRepository.index();
    }
  
    async get(id) {
      return await this.productRepository.get(id);
    }
  
    async create(product) {
        return await this.productRepository.create(product);
    }
  
    async update(id, product) {
        const updatedProduct = await this.productRepository.update(id, product);
        if (!updatedProduct) {
          return { success: false };
        }
        return { success: true, user: updatedProduct };
      }
  
    async delete(id) {
      return await this.productRepository.delete(id);
    }
  }
  
  module.exports = ProductService;