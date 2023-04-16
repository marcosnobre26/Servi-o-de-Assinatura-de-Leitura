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
            const { name, email, password } = req.body;
            const user = { name, email, password };
            const createdUser = await userService.createUser(user);
            res.status(201).json(createdUser);
        } catch (error) {
            next(error);
        }
    }
    
    async updateUser(req, res, next) {
        try {
            const id = req.params.id;
            const { name, email, password } = req.body;
            const user = { name, email, password };
            const updatedUser = await userService.updateUser(id, user);
            if (updatedUser === null) {
                res.status(404).send(`User with id ${id} not found`);
            } else {
                res.status(200).json(updatedUser);
            }
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