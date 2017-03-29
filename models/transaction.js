'use strict'

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//create a Schema
let transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  findOne: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book' }]
});

//the schema is useless so far
//we need to create a model using it
let Transaction = mongoose.model('Transaction', transactionSchema);

//make this available to our users in our Node Applications
module.exports = Transaction;
