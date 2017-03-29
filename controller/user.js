const User = require('../models/user')
const pwHash = require('password-hash')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const Strategy = require('passport-local').Strategy
require('dotenv').config()

passport.use(new Strategy( (username, password, cb)=> {
  User.findOne({username: username}, (err, user)=> {
    if(err || user == null) {
      cb(err)
    } else if(password !== null && pwHash.verify(password, user.password)) {
      cb(null, user)
    } else {
      cb(null, false)
    }
  })
}))

module.exports = {

  signUp : (req, res)=> {
    let newUser = User({
      username: req.body.username,
      password: pwHash.generate(req.body.password),
      isAdmin: req.body.isAdmin
    })
    newUser.save((err)=> {
      if(err) {
        res.send(err)
      } else {
        res.send(`User ${req.body.username} added into database`)
      }
    })
  },
  signIn : (req, res)=> {
    let token = jwt.sign({username: req.user.username, isAdmin: req.user.isAdmin}, process.env.SECRET_KEY)
    res.send(token)
  },
  showUser : (req, res)=> {
    User.find({}, (err, users)=> {
      if(err) {
        res.send(err)
      } else {
        res.send(users)
      }
    })
  }
}