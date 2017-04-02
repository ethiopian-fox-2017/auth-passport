const dbBook = require('../models/book-model');
const jwt = require('jsonwebtoken');

var createBook = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbBook.create(req.body, (err, docs) => {
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


var getAllBook = function(req, res) {
  if (req.decoded.role == 'admin' || req.decoded.role == 'client') {
    dbBook.find({}, (err, docs) => {
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


var updateBook = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbBook.findByIdAndUpdate(req.params.id, req.body, (err,docs) => {
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

var deleteBook = function(req, res) {
  if (req.decoded.role == 'admin') {
    dbBook.findByIdAndRemove(req.params.id, (err, docs) => {
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
  createBook, getAllBook, updateBook, deleteBook
};
