const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  isbn: String,
  title: String,
  location: String,
  author: String,
  category: String,
  stock: Number
});


const Book = module.exports = mongoose.model('Book', bookSchema);


module.exports = Book;