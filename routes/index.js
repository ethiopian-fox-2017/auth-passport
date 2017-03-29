var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy
var router = express.Router()
var helper = require('../helpers/register');
var User = require('../models/user')
// require('../helpers/login')


passport.use(new Strategy(
  function(username, password, cb) {
    User.findOne({'username' : username}, function (err, user) {
      if (err) {
        cb(err)
      }else{
        if (!user) {
          cb(null, false)
        }else{
          if (user.password != password) {
            cb(null, false)
          }else{
            cb(null, user)
          }
        }
      }
    })
  }));

router.use(passport.initialize());
router.post('/register', helper.register);
router.post('/login',  passport.authenticate('local',{session : false}), function(req, res) {
    res.send(res.req.user)
  });


module.exports = router
