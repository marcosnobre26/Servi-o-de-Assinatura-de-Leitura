const UserRepository = require("../repositories/userRepository");
const bcrypt = require('bcryptjs');

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
        user.password = await bcrypt.hash(user.password, 10);
        return await this.userRepository.create(user);
    }
  
    async updateUser(id, user) {
        const updatedUser = await this.userRepository.update(id, user);
        if (!updatedUser) {
          return { success: false };
        }
        return { success: true, user: updatedUser };
    }
  
    async deleteUser(id) {
      return await this.userRepository.delete(id);
    }
}
  
module.exports = UserService;
