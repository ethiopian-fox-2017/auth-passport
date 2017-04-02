const dbUser = require('../models/user-model');
const passwordHash = require('password-hash');
const jwt = require('jsonwebtoken');
require('dotenv').config()

var signUp = function(req, res) {
  dbUser.create({
    username: req.body.username,
    password: passwordHash.generate(req.body.password),
    role: req.body.role
  }, (err, docs) => {
    if (err) {
      res.send(err)
    }else {
      res.send(docs)
    }
  })
}

var loginUser = function(req, res) {
  dbUser.findOne({username: req.body.username}, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      if (req.user.authenticated) {
        var token = jwt.sign({
          username: req.body.username,
          role: req.body.role
        }, process.env.SECRET_KEY)
        res.send(token)
      } else {
        res.send('Login Failed')
      }
    }
  })
}


var getAllUser = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbUser.find({}, (err, docs) => {
      if (err) {
        res.send(err)
      } else {
        res.send(docs)
      }
    })
  } else {
    res.send('Unauthorized')
  }
}


var updateUser = function(req, res) {
  if (req.decoded.role == 'admin' || req.decoded.role == 'client') {
    dbUser.findByIdAndUpdate(req.params.id, req.body, (err,docs) => {
      if (err) {
        res.send(err)
      }else {
        res.send(docs)
      }
    })
  }else {
    res.send('Unauthorized')
  }
}

var deleteUser = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbUser.findByIdAndRemove(req.params.id, (err, docs) => {
      if (err) {
        res.send(err)
      } else {
        res.send(docs)
      }
    })
  }else {
    res.send('Unauthorized')
  }
}

module.exports = {
  getAllUser, updateUser, deleteUser, loginUser, signUp
};
