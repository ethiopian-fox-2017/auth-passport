'use strict'

let Book = require('../models/book');

let getAll = function (req, res, next) {
  Book.find(function (err, books){
    if(err){
      res.json({error: err});
    } else {
      res.json(books);
    }
  })
};

let createOne = function (req, res, next) {
  Book.create({
    isbn : req.body.isbn,
    title : req.body.title,
    author : req.body.author,
    category : req.body.category,
    stock : 3
  }, function (error, book){
    if(error) throw error;
    res.send(book);
  })
};

let update = function (req, res, next) {
  let temp = {
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  }
  Book.update({ isbn: req.params.isbn }, { $set: temp}, function(err){
    res.send(err);
  });
};

let deleteOne = function (req, res, next) {
  Book.findOne({isbn: req.params.isbn}).remove(function(err){
    res.send(err);
  });
};

module.exports = {
  getAll,
  createOne,
  update,
  deleteOne
}
