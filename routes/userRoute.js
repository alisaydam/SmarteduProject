const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware')
const { body } = require('express-validator');
const User = require('../models/User');

const router = express.Router();

router.route('/signup').post(
    [
        body('name').not().isEmpty().withMessage('Please enter your name'),
        body('email').isEmail().withMessage('Please enter your email')
        .custom((userEmail)=> {
            return User.findOne({email: userEmail}).then(user => {
                if(user){
                    return Promise.reject('Email is already taken')
                }
            });
        }),
        body('password').not().isEmpty().withMessage('Please enter a password'),
    ],
    authController.createUser); //* http://localhost: 3000/users/signup
router.route('/login').post(authController.loginUser); //* http://localhost: 3000/users/signup
router.route('/logout').get(authController.logoutUser); //* http://localhost: 3000/users/signup
router.route('/dashboard').get(authMiddleware, authController.getDashboardPage); //* http://localhost: 3000/users/dashboard


module.exports = router;
