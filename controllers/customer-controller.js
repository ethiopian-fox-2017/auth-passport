const dbCustomer = require('../models/customer-model');
const jwt = require('jsonwebtoken');

var createCustomer = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbCustomer.create(req.body, (err, docs) => {
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


var getAllCustomer = function(req, res) {
  if (req.decoded.role == 'admin' || req.decoded.role == 'client') {
    dbCustomer.find({}, (err, docs) => {
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


var updateCustomer = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbCustomer.findByIdAndUpdate(req.params.id, req.body, (err,docs) => {
      if (err) {
        res.send(err)
      }else {
        res.send(docs)
      }
    })
  } else {
    res.send('Unauthorized')
  }
}

var deleteCustomer = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbCustomer.findByIdAndRemove(req.params.id, (err, docs) => {
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

module.exports = {
  createCustomer, getAllCustomer, updateCustomer, deleteCustomer
};
