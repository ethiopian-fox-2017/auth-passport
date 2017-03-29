const Book = require('../models/book');

let tampilBuku = (req, res) => {
  Book.find((err,results) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  })
}

let tambahBuku = (req, res) => {

  let newBook = new Book({
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    stock:req.body.stock
  })
  newBook.save(function(err,data) {
    if(err) {
      res.send(err.message)
    } else {
      res.send(data)
    }
  })

}

let updateBuku = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, {
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    stock:req.body.stock
  }, function(err){
    if(err) {
      res.send(err.message);
    } else {
      res.send('Data berhasil di update')
    }
  })
}

let deleteBuku = (req, res) => {
  Book.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.send(err.message);
    } else {
      res.send('Data telah terhapus');
    }
  })
}

module.exports = {tampilBuku,tambahBuku,updateBuku,deleteBuku};