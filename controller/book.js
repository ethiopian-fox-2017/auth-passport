const Book = require('../models/book')

module.exports = {

  createBook : (req, res)=> {
    let newBook = Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    newBook.save((err)=> {
        if(err) {
          res.send('Add new book failed')
        } else {
          res.send(`${req.body.title} added into Database`)
        }
    })
  },
  listBook : (req, res)=> {
    Book.find({}, (err, books)=> {
      if(err) {
        res.send('Request Data to server failed')
      } else {
        res.send(books)
      }
    })
  },
  deleteBook : (req, res)=> {
    Book.findByIdAndRemove(req.params.objectId, (err, book)=> {
      if(err){
        res.send('Delete book failed')
      } else {
        res.send(`Book ${book.title} deleted`)
      }
    })
  },
  editBook : (req, res)=> {
    Book.findOneAndUpdate(
      { _id: req.params.objectId},
      {
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, book)=> {
        if(err) {
          res.send('Update data Failed')
        } else {
          res.send(`Book ${book.title} updated`)
        }
      }
    )
  }

}