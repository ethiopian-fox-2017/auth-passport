var db = require("../models/customer")

let getAllCustomer = function(req, res) {
  db.find(function(err, data) {
    if (!err) {
      res.send(data)
    }
  })
}

let createCustomer = function(req, res) {
  let newCustomer = new db({
    "name"      : req.body.name,
    "memberid"  : req.body.memberid,
    "address"   : req.body.address,
    "zipcode"   : req.body.zipcode,
    "phone"     : req.body.phone
  })

  newCustomer.save(function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let updateCustomer = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      "name"      : req.body.name,
      "memberid"  : req.body.memberid,
      "address"   : req.body.address,
      "zipcode"   : req.body.zipcode,
      "phone"     : req.body.phone
    }
  }, function(err, data) {
    if (!err) {
      res.send("Data berhasil di update!")
    }
  })
}

let deleteCustomer = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Data berhasil di delete !")
    }
  })
}


module.exports = {
  getAllCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
}