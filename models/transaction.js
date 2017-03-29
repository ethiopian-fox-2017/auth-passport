'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema ({
  "name"     : String,
  "memberid" : String,
  "days"     : String,
  "out_date" : String,
  "due_date" : String,
  "in_date"  : String,
  "fine"     : Number,
  "booklist" : [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
