const user = require('../models/user');
const jwt = require('jsonwebtoken');
const pwh = require('password-hash');

let createUser = function(req, res) {
  let newUser = new user({
    username  : req.body.username,
    password  : pwh.generate(req.body.password)
  })
  newUser.save(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let login = function(req, res) {
  let token = jwt.sign({username : req.user.username}, "agusto")
  res.send(token)
}

module.exports = {
  createUser,
  login
}