const Joi = require('@hapi/joi');

const AuthValidator = Joi.object({
    email: Joi.string().max(200).required(),
    password: Joi.string().min(6).max(12).required()
});

module.exports = AuthValidator;