const commentRoutes = require('express').Router();

const CommentController = require('../controllers/CommentController');
const validator = require('express-joi-validation').createValidator({passError: true});
const CommentSchemaValidator = require('../validator/CommentValidator');


commentRoutes.post('/post/:postId', validator.body(CommentSchemaValidator), CommentController.store);
commentRoutes.patch('/like/:commentId', CommentController.like);


module.exports = commentRoutes;