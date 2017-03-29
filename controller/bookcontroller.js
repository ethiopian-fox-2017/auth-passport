var db = require("../models/book");

let createBook = function(req, res) {
  db.create({
    "isbn": req.body.isbn,
    "title": req.body.title,
    "author": req.body.author,
    "category": req.body.category,
    "stock": req.body.stock,
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let getAllBook = function(req, res) {
  db.find(function(err, books) {
    console.log(books)
    res.send(books)
  })
}

let updateBook = function(req, res) {
  db.findByIdAndUpdate(req.params.id, {
    $set : {
      "isbn"      : req.body.isbn,
      "title"     : req.body.title,
      "author"    : req.body.author,
      "category"  : req.body.category,
      "stock"     : req.body.stock
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Data berhasil di update !")
    }
  })
}

let deleteBook = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Data berhasil di hapus !")
    }
  })
}

module.exports = {
  createBook,
  getAllBook,
  updateBook,
  deleteBook
}