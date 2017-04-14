const db = require("../models/users_model")
const hash = require("password-hash");

let showToken = (req, res) => {
  res.send(req.user.token)
}

let createUser = (req, res) => {
  db.create({
    "username": req.body.username,
    "password": hash.generate(req.body.password),
    "email": req.body.email,
    "role": req.body.role,
  }, (err, dataSaved) => {
    if (!err) {
      res.send(dataSaved)
    }
  })
}

let dataUser = (req, res) => {
    db.find({}, (err, result) => {
      if (!err) {
        res.send(result)
      }
    })
}

let updateUser = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "username": req.body.username,
        "password": hash.generate(req.body.password),
        "email": req.body.email,
      }
    }, {new: true}, (err, books) => {
      if (!err) {
        res.send(`Data with id ${req.params.id} is updated!`)
      }else {
        res.send(err)
      }
    })
}

let removeUser = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(`Data user with Id ${result.isbn} is removed!`)
    }
  })
}


module.exports = {
  createUser, dataUser, updateUser, removeUser, showToken
}
