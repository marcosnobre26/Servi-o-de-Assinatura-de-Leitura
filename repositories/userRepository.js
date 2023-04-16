const User = require('../models/UserModel');

class UserRepository {
    
    async findAll() {
      const users = await User.findAll();
      return users;
    }
  
    async findById(id) {
      const user = await User.findByPk(id);
      return user;
    }
  
    async create(user) {
      const newUser = await User.create(user);
      return newUser;
    }
  
    async update(id, user) {
      const [rowsUpdated, [updatedUser]] = await User.update(user, { where: { id }, returning: true });
      if (rowsUpdated === 0) {
        return null;
      }
      return updatedUser;
    }
  
    async delete(id) {
      const rowsDeleted = await User.destroy({ where: { id } });
      if (rowsDeleted === 0) {
        return null;
      }
      return;
    }
}
  
module.exports = UserRepository;