const dbCustomer = require('../models/customer-model');

var createCustomer = function(req, res) {
  dbCustomer.create(req.body, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}


var getAllCustomer = function(req, res) {
  dbCustomer.find({}, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}


var updateCustomer = function(req, res) {
  dbCustomer.findByIdAndUpdate(req.params.id, req.body, (err,docs) => {
    if (err) {
      res.send(err)
    }else {
      res.send(docs)
    }
  })
}

var deleteCustomer = function(req, res) {
  dbCustomer.findByIdAndRemove(req.params.id, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}

module.exports = {
  createCustomer, getAllCustomer, updateCustomer, deleteCustomer
};
