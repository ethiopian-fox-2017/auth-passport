var Book = require('../models/book');

var book={}

book.add = (req,res,next) => {
  Book.create({
    "isbn"     : req.body.isbn,
    "title"    : req.body.title,
    "author"   : req.body.author,
    "category" : req.body.category,
    "stock"    : req.body.stock
  }, (error,result) => {
    if(error){
      res.send(error);
    } else {
      res.send(result);
    }
  });
}

book.findAll = (req,res,next) => {
  Book.find((err,books) => {
    if (err){
      res.send({error:err});
    } else {
      res.send(books);
    }
  });
}

book.findOne = (req,res,next) => {
  Book.findOne({
    _id:req.params.id
  },(err,book) => {
    if (err) {
      res.send ('Book not found');
    } else {
      res.send (book);
    }
  })
}

book.update = (req,res,next) => {
  Book.findOneAndUpdate({
    isbn : req.params.isbn
  },{
    "isbn"     : req.body.isbn,
    "title"    : req.body.title,
    "author"   : req.body.author,
    "category" : req.body.category,
    "stock"    : req.body.stock
  }, (err,book) => {
    if (err) {
      res.send ('Book not updated');
    } else {
      res.send ('Book updated');
    }
  });
}

book.delete = (req,res,next) => {
  Book.findOneAndRemove(req.params.isbn, (err,book) => {
    if (err) {
      res.send ('Delete book failed');
    } else {
      res.send ('Book deleted');
    }
  });
}

module.exports = book
