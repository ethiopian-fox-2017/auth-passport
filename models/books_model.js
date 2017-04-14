const mongoose = require("mongoose");
const db = require("./db");

let bookSchema = new mongoose.Schema({
  isbn: {
    type: String,
    unique: true
  },
  title: String,
  author: String,
  category: String,
  stock: Number
});

let Book = db.model("Book", bookSchema);

module.exports = Book
