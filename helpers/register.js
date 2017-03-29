var express = require('express');
var passwordHash = require('password-hash');
var User = require('../models/user')
var passport = require('passport');
var Strategy = require('passport-local').Strategy
// require('dotenv').config()

var methods = {}

methods.register = function (req,res,next) {
  User.findOne({'username' : req.body.username}, function (err,result) {
    if (err) {
      res.json(err)
    }else{
      if (!result) {
        let data = {
          username : req.body.username,
          password  : passwordHash.generate(req.body.password)
        }
        User.create(data,function (err, user) {
          if (err) {
            res.json(err)
          }else{
            res.json(user)
          }
        })
      }else{
        res.json("user already exists")
      }
    }
  })
}


module.exports = methods
