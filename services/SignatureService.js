const UserRepository = require("../repositories/userRepository");
const SignatureRepository = require("../repositories/signatureRepository");

class SignatureService {
    constructor() {
      this.signatureRepository = new SignatureRepository();
    }
  
    async index() {
      return await this.signatureRepository.index();
    }
  
    async get(id) {
      return await this.signatureRepository.get(id);
    }
  
    async create(signature) {
        return await this.signatureRepository.create(product);
    }
  
    async update(id, signature) {
        const updatedSignature = await this.signatureRepository.update(id, signature);
        if (!updatedSignature) {
          return { success: false };
        }
        return { success: true, user: updatedSignature };
      }
  
    async delete(id) {
      return await this.signatureRepository.delete(id);
    }
  }
  
  module.exports = SignatureService;