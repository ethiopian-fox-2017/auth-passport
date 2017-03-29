const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('../config/mongo.js')

const bookSchema = new Schema({
  isbn : String,
  title : String,
  author : String,
  category : String,
  stock : Number
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book
