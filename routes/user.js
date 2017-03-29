const express = require('express');
const router = express.Router()
const userController = require('../controllers/user-controller');
const dbUser = require('../models/user-model');
const passport = require('passport');
const verifier = require('../helpers/jwt');

router.post('/signup', userController.signUp)

router.post('/login', passport.authenticate('local', {session: false}), userController.loginUser)

router.get('/', verifier, userController.getAllUser)

router.put('/:id', verifier, userController.updateUser)

router.delete('/:id', verifier, userController.deleteUser)




module.exports = router;
