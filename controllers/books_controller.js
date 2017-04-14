const db = require("../models/books_model")

let createBook = (req, res) => {
  db.create({
    "isbn": req.body.isbn,
    "title": req.body.title,
    "author": req.body.author,
    "category": req.body.category,
    "stock": req.body.stock,
  }, (err, dataSaved) => {
    if (!err) {
      res.send(dataSaved)
    }
  })
}

let dataBook = (req, res) => {
  db.find({}, (err, result) => {
    if (!err) {
      res.send(result)
    }
  })
}

let updateBook = (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "isbn": req.body.isbn,
        "title": req.body.title,
        "author": req.body.author,
        "category": req.body.category,
        "stock": req.body.stock,
      }
    }, {new: true}, (err, books) => {
      if (!err) {
        res.send(`Data with id ${req.params.id} is updated!`)
      }else {
        res.send(err)
      }
    })
}

let removeBook = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(`Data books with ISBN ${result.isbn} is removed!`)
    }
  })
}


module.exports = {
  createBook, dataBook, updateBook, removeBook
}
