const UserService = require('../services/UserService');

const userService = new UserService();

class UserController {
    async getAllUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
    
    async getUserById(req, res, next) {
        try {
            const id = req.params.id;
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    
    async createUser(req, res, next) {
        try {
            const { name, email } = req.body;
            const user = await userService.createUser(name, email);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
    
    async updateUser(req, res, next) {
        try {
            const id = req.params.id;
            const { name, email } = req.body;
            const user = await userService.updateUser(id, name, email);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    
    async deleteUser(req, res, next) {
        try {
            const id = req.params.id;
            const user = await userService.deleteUser(id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();