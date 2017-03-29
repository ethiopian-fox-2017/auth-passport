const dbTransaction = require('../models/transaction-model')


var createTransaction = function(req, res) {
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
}


var getAllTransaction = function(req, res) {
  dbTransaction.find().populate('memberid').populate('booklist').exec((err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}

var updateTransaction = function(req, res) {
  dbTransaction.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}

var deleteTransaction = function(req, res) {
  dbTransaction.findByIdAndRemove(req.params.id, req.body, (err, docs) => {
    if (err) {
      res.send(err)
    }else {
      res.send(docs)
    }
  })
}

module.exports = {
  createTransaction, getAllTransaction, updateTransaction, deleteTransaction
};
