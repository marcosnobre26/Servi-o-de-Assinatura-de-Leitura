const UserRepository = require("../repositories/userRepository");
const bcrypt = require('bcryptjs');

class UserService {
    constructor() {
      // Remova a instância da classe UserRepository
    }
  
    async getAllUsers() {
      return await UserRepository.findAll();
    }
  
    async getUserById(id) {
      return await UserRepository.findById(id);
    }
  
    async createUser(user) {
        user.password = await bcrypt.hash(user.password, 10);
        return await UserRepository.create(user);
    }
  
    async updateUser(id, user) {
        const updatedUser = await UserRepository.update(id, user);
        if (!updatedUser) {
          return { success: false };
        }
        return { success: true, user: updatedUser };
    }
  
    async deleteUser(id) {
      return await UserRepository.delete(id);
    }
}
  
module.exports = UserService;
