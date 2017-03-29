var Book = require('../models/book');

var addBook = function(req, res, next) {
  Book.create({
    "isbn" : req.body.isbn,
    "title" : req.body.title,
    "author" : req.body.author,
    "category" : req.body.category,
    "stock" : req.body.stock
  }, function(err, book) {
    if(err){
      res.send(err)
    } else {
      res.send(book)
    }
  });
}

var showBooks = function(req, res, next) {
  Book.find(function(err, books) {
    if(err) {
      res.send({error: err})
    } else {
      res.send(books)
    }
  });
}

var deleteBook = function(req, res) {
  Book.findByIdAndRemove(req.params.bookId, function (err, book) {
    if(err){
      res.send('Deleting Book Failed')
    } else {
      res.send(`Book with title "${book.tilte}" has been succesfully deleted from Database.`)
    }
  });
}

var updateBook = function(req, res) {
  Book.findOneAndUpdate(
    {
      "_id" : req.params.bookId
    },
    {
      "isbn" : req.body.isbn,
      "title" : req.body.title,
      "author" : req.body.author,
      "category" : req.body.category,
      "stock" : req.body.stock
    }, function(err, book) {
      if(err){
        res.send(err)
      } else {
        res.send(`Book info with title "${book.title}" has been succesfully updated.`)
      }
    })
}

module.exports = {
  addBook,
  showBooks,
  deleteBook,
  updateBook
}
