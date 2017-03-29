var express = require('express');
var User = require('../models/user')
var passport = require('passport');
var Strategy = require('passport-local').Strategy

var methods = {}

methods.register = function (req,res,next) {
  User.findOne({'username' : req.body.username}, function (err,result) {
    if (err) {
      res.json(err)
    }else{
      if (!result) {
        User.create(req.body,function (err, user) {
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
