const UserRepository = require("../repositories/userRepository");


class UserService {
    constructor() {
      this.userRepository = new UserRepository();
    }
  
    async getAllUsers() {
      return await this.userRepository.findAll();
    }
  
    async getUserById(id) {
      return await this.userRepository.findById(id);
    }
  
    async createUser(user) {
      return await this.userRepository.create(user);
    }
  
    async updateUser(id, user) {
      return await this.userRepository.update(id, user);
    }
  
    async deleteUser(id) {
      return await this.userRepository.delete(id);
    }
  }
  
  module.exports = UserService;