const SignatureService = require('../services/SignatureService');

const signatureService = new SignatureService();

class SignatureController {
    async index(req, res, next) {
        try {
            const signatures = await signatureService.index();
            res.status(200).json(signatures);
        } catch (error) {
            next(error);
        }
    }
    
    async get(req, res, next) {
        try {
            const id = req.params.id;
            const signature = await signatureService.get(id);
            res.status(200).json(signature);
        } catch (error) {
            next(error);
        }
    }
    
    async create(req, res, next) {
        try {
            const { status, last_payment, user_id, product_id } = req.body;
            const signature = { status, last_payment, user_id, product_id };
            const createdSignature = await signatureService.create(signature);
            res.status(201).json(createdSignature);
        } catch (error) {
            next(error);
        }
    }
    
    async update(req, res, next) {
        try {
            const id = req.params.id;
            const { status, last_payment, user_id, product_id } = req.body;
            const signature = { status, last_payment, user_id, product_id };
            const updatedSignature = await signatureService.update(id, signature);
            if (updatedSignature === null) {
                res.status(404).send(`User with id ${id} not found`);
            } else {
                res.status(200).json(updatedSignature);
            }
        } catch (error) {
            next(error);
        }
    }
    
    async delete(req, res, next) {
        try {
            const id = req.params.id;
            const signature = await signatureService.delete(id);
            res.status(200).json(signature);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new SignatureController();