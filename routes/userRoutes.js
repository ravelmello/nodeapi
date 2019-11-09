const userroutes = require('express').Router();
const validator = require('express-joi-validation').createValidator({passError: true});

const UserController = require('../controllers/UserController');
const UserValidator = require('../validator/UserValidator');

/** 
 * 
 * User Routes 
 * 
 * */
userroutes.get('', UserController.index);
userroutes.get('/:userId', UserController.show);
userroutes.post('/', validator.body(UserValidator), UserController.store);
userroutes.put('/:userId', validator.body(UserValidator),UserController.update);
userroutes.delete('/:userId', UserController.delete);


module.exports = userroutes;