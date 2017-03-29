const Book = require('../models/book');

module.exports = {

  insertOne: function(req, res, next) {

    Book.create(req.body, (err, book) => {
      if (err) res.json(err)
      res.json(book)
    })

  }, // insertOne

  findAll: function(req, res, next) {

    Book.find({}, (err, books) => {
      if (err) res.json(err)
      res.json(books)
    })

  }, // findAll

  findOne: function(req, res, next) {

    Book.findById(req.params.id, (err, book) => {
      if (err) res.json(err)
      res.json(book)
    })

  }, // findOne

  updateOne: function(req, res, next){

    Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .exec((err, book) => {
        if (err) res.json(err)
        res.json(book)
      })

  }, // updateOne

  deleteOne: function(req, res, next){

    Book.findByIdAndRemove(req.params.id)
        .exec((err, book) => {
          if (err) res.json(err)
          res.json(book)
        })

  }, // deleteOne

  searchByTitle: function(req, res, next) {

    Book.find({ title: { $regex: req.query.title, $options: 'i' }}, function(err, books) {
      if (err) res.json(err)
      res.json(books)
    });

  } // searchByTitle

}