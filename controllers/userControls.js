const user = require('../models/user')
const jwt = require('jsonwebtoken');
const pwh = require('password-hash')
require('dotenv').config()

let createUser = (req, res) => {
  let newUser = new user({
    username: req.body.username,
    password: pwh.generate(req.body.password)
  })

  newUser.save((err,data) => {
    if(err) {
      res.send(err.message)
    } else {
      res.send(data)
    }
  })
}

let logIn = (req, res) => {
  let token = jwt.sign({username:req.user.username}, process.env.SECRET_KEY)
  res.send(token)
}

module.exports = {createUser,logIn};