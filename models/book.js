'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let bookSchema = new Schema({
  isbn: {type: String, required: true, unique: true},
  title: String,
  author: String,
  category: String,
  stock: Number
});

//the schema is useless so far
//we need to create a model using it
let Book = mongoose.model('Book', bookSchema);

//make this available to our users in our Node Applications
module.exports = Book;
