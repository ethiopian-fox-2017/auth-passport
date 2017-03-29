const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  memberid: String,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [ { type: Schema.Types.ObjectId, ref: 'Book' } ]
  // booklist: [ { _id: { type: Schema.Types.ObjectId, ref: 'Book' }, qty: Number }]
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction
