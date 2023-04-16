const ProductService = require('../services/ProductService');

const productService = new ProductService();

class ProductController {
    async index(req, res, next) {
        try {
            const users = await productService.index();
            res.status(200).json(users);
        } catch (error) {
            next(error);
        }
    }
    
    async get(req, res, next) {
        try {
            const id = req.params.id;
            const user = await productService.get(id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
    
    async create(req, res, next) {
        try {
            const { name, price, description, url_image, status } = req.body;
            const product = { name, price, description, url_image, status };
            const createdProduct = await productService.create(product);
            res.status(201).json(createdProduct);
        } catch (error) {
            next(error);
        }
    }
    
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const { name, price, description, url_image, status } = req.body;
            const product = { name, price, description, url_image, status };
            const updatedProduct = await productService.update(id, product);
            if (updatedProduct === null) {
                res.status(404).send(`User with id ${id} not found`);
            } else {
                res.status(200).json(updatedProduct);
            }
        } catch (error) {
            next(error);
        }
    }
    
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const user = await productService.delete(id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ProductController();