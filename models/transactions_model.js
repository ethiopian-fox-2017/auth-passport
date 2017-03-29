const mongoose = require("mongoose");
const db = require("./db");

let transactionSchema = new mongoose.Schema({
  memberid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Customer'
  },
  days: String,
  out_date: Date,
  due_date: String,
  in_date: String,
  fine: Number,
  booklist: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }
  ],
});

let Transaction = db.model("Transaction", transactionSchema);

module.exports = Transaction
