const Joi = require('@hapi/joi');

const UserSchemaValidator = Joi.object({
    name: Joi.string().max(120).required(),
    email: Joi.string().email().max(200).required(),
    password: Joi.string().min(6).max(12).required()
});

module.exports = UserSchemaValidator;