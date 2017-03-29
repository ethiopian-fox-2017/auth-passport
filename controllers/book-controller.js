const dbBook = require('../models/book-model');

var createBook = function(req, res) {
  dbBook.create(req.body, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}


var getAllBook = function(req, res) {
  dbBook.find({}, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}


var updateBook = function(req, res) {
  dbBook.findByIdAndUpdate(req.params.id, req.body, (err,docs) => {
    if (err) {
      res.send(err)
    }else {
      res.send(docs)
    }
  })
}

var deleteBook = function(req, res) {
  dbBook.findByIdAndRemove(req.params.id, (err, docs) => {
    if (err) {
      res.send(err)
    } else {
      res.send(docs)
    }
  })
}

module.exports = {
  createBook, getAllBook, updateBook, deleteBook
};
