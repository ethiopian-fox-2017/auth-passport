'use strict'

const password = require('password-hash');
let User = require('../models/user');

let getAll = function (req, res, next) {
  User.find(function (err, users){
    if(err){
      res.json({error: err});
    } else {
      res.json(users);
    }
  })
};

let createOne = function (req, res, next) {
 // Creating hash
 let hashPassword = password.generate(req.body.password);
  User.create({
    username : req.body.username,
    password : hashPassword
  }, function (error, user){
    if(error) throw error;
    res.send(user);
  })
};

module.exports = {
  getAll,
  createOne
}
