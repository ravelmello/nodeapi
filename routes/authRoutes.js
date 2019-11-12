const authRoutes = require('express').Router();
const AuthController = require('../controllers/AuthController');
const validator = require('express-joi-validation').createValidator({passError: true});
const AuthValidator = require('../validator/AuthValidator');


authRoutes.post('/', validator.body(AuthValidator), AuthController.store);

module.exports = authRoutes;