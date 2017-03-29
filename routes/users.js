const express = require('express');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
let router = express.Router();
let User = require('../models/user');
let controller = require('../controllers/userController');
const passport = require('passport');
let Strategy = require('passport-local').Strategy;
let helpers = require('../helpers/authentication');
require('dotenv').config()

router.get('/',helpers.authenticate, controller.getAll);

router.post('/', controller.createOne);

passport.use(new Strategy(
  function(username,password,cb){
    User.findOne({username: username}, function (err, user) {
    if (err) return handleError(err);
    let isVerify = passwordHash.verify(password, user.password);
    if(isVerify){
      let token = jwt.sign({
        username: username
        },
        process.env.SECRET,
        {expiresIn: '1h'});
      cb(null, token);
    } else {
      cb("Username or Password not match!");
    }
  })
  }
));

router.use(passport.initialize());

router.post('/login', passport.authenticate('local', {session:false}), function(req,res){
  res.send(req.user);
})

module.exports = router;
