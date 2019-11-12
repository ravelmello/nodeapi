const Joi = require('@hapi/joi');

const CommentSchemaValidator = Joi.object({
    comment: Joi.string().max(500).required()
})


module.exports = CommentSchemaValidator;