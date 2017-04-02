const dbTransaction = require('../models/transaction-model')
const jwt = require('jsonwebtoken');


var createTransaction = function(req, res) {
  if (req.decoded.role == 'admin' || req.decoded.role == 'client') {
    if (/[,]/gi.test(req.body.booklist)) {
      req.body.booklist = req.body.booklist.split(',')
      console.log('comma');
    } else {
      req.body.booklist = req.body.booklist
      console.log('no comma');
    }
    dbTransaction.create(req.body, (err, docs) => {
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


var getAllTransaction = function(req, res) {
  if (req.decoded.role == 'admin' || req.decoded.role == 'client') {
    dbTransaction.find().populate('memberid').populate('booklist').exec((err, docs) => {
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

var updateTransaction = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbTransaction.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
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

var deleteTransaction = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbTransaction.findByIdAndRemove(req.params.id, req.body, (err, docs) => {
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

module.exports = {
  createTransaction, getAllTransaction, updateTransaction, deleteTransaction
};
