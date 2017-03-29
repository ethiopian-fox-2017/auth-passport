var User = require('../models/user');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
require('dotenv').config();

var signup = function(req, res, next) {
  User.create({
    "username": req.body.username,
    "password": passwordHash.generate(req.body.password), //SAVING HASHED PASSWORD TO PASSWORD FIELD IN DB
    "role": req.body.role
  }, function(err, book) {
    if(err){
      res.send(err)
    } else {
      res.send(book)
    }
  });
}

var showUsers = function(req, res, next) {
  User.find(function(err, users) {
    if(err) {
      res.send({error: err})
    } else {
      res.send(users)
    }
  });
}

//THIS SECTION WILL BE USED AS A MIDDLEWARE in ROUTES/USERS.JS
passport.use(new Strategy (function(username, password, cb) {
  User.findOne({username: username}, function(err, user) {
    if(err || user == null){
      cb("USERNAME NOT FOUND")
    } else {
      if(passwordHash.verify(password, user.password)){
        cb(null, user) //user di line 38 ini dilempar, lalu ditangkap di line 47
      } else {
        cb("INVALID PASSWORD")
      }
    }
  })
}))

//THIS SECTION WILL BE EXECUTED, IF ONLY THE ABOVE MIDDLEWARE (PASSPORT) HAS MET ITS REQUIREMENT
var login = function(req, res, next) {
      let user = req.user; //req.user ini hasil tangkapan dari line 38
      var token = jwt.sign(
      {
        username: user.username,
        role: user.role
      },
      process.env.SECRETKEYS,
      {expiresIn: '1h'}
      )
      res.send(token)
     }

module.exports = {
  signup,
  login,
  showUsers
}
