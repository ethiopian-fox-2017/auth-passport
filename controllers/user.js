const User = require('../models/user');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');

module.exports = {

  insertOne: function(req, res, next) {
    let data = req.body
    data.password = passwordHash.generate(req.body.password)
    User.create(data, (err, user) => {
      if (err) res.json(err)
      res.json(user)
    })

  }, // insertOne

  findAll: function(req, res, next) {

    User.find({}, (err, users) => {
      if (err) res.json(err)
      res.json(users)
    })

  }, // findAll

  findOne: function(req, res, next) {

    User.findById(req.params.id, (err, user) => {
      if (err) res.json(err)
      res.json(user)
    })

  }, // findOne

  updateOne: function(req, res, next){

    User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .exec((err, user) => {
        if (err) res.json(err)
        res.json(user)
      })

  }, // updateOne

  deleteOne: function(req, res, next){

    User.findByIdAndRemove(req.params.id)
        .exec((err, user) => {
          if (err) res.json(err)
          res.json(user)
        })

  }, // deleteOne

  login: function(req, res, next){

    let user = req.user
    let token = jwt.sign({
      username: req.user.username,
      role: req.user.role}, 'secret');
    res.send(token)

  } // login

}