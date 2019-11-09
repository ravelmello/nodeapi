const Joi = require('@hapi/joi');

const PostSchemaValidator = Joi.object({
    title: Joi.string().max(120).required(),
    text: Joi.string().max(500).required()
});


module.exports = PostSchemaValidator;