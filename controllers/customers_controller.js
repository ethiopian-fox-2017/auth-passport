const db = require("../models/customers_model")

let addCustomer = (req, res) => {
  db.create({
    "name": req.body.name,
    "memberid": req.body.memberid,
    "address": req.body.address,
    "zipcode": req.body.zipcode,
    "phone": req.body.phone,
  }, (err, dataSaved) => {
    if (!err) {
      res.send(dataSaved)
    }
  })
}

let dataCustomer = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result)
    }
  })
}

let updateCustomer = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "name": req.body.name,
        "memberid": req.body.memberid,
        "address": req.body.address,
        "zipcode": req.body.zipcode,
        "phone": req.body.phone,
      }
    }, {new: true}, (err, books) => {
      if (!err) {
        res.send(`Data customer with id ${req.params.id} is updated!`)
      }else {
        res.send(err)
      }
    })
}

let removeCustomer = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(`Data customer with id ${req.params.id} is removed!`)
    }
  })
}

module.exports = {
  addCustomer, dataCustomer, updateCustomer, removeCustomer
}
