const User = require('../models/UserModel');
const debug = require('debug')('userRepository');

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
        debug('update');
        const updatedRows = await User.update(user, { where: { id } });
        if (updatedRows[0] === 0) {
            return null;
        }
        const updatedUser = await User.findByPk(id);
        return updatedUser;
    }

    static async findByEmail(email) {
        return await User.findOne({
            where: {
                email: email
            }
        });
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