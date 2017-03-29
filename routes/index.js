var express = require('express');
var passport = require('passport');
var router = express.Router()
var helper = require('../helpers/register');
var token = require('../helpers/token');
var User = require('../models/user')

router.post('/register', helper.register);
router.post('/login', passport.authenticate('local',{session : false}) , token.generateToken);

module.exports = router
