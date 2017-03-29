var express = require('express');
var passport = require('passport');
var router = express.Router()
var helper = require('../helpers/register');
var User = require('../models/user')
// require('../helpers/login')

router.post('/register', helper.register);
router.post('/login', passport.authenticate('local',{session : false}) , function(req, res) {
    res.send(res.req.user)
  });


module.exports = router
