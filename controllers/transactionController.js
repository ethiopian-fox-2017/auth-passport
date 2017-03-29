'use strict'

let Transaction = require('../models/transaction');

let getAll = function (req, res, next) {
  Transaction.find()
  .populate('booklist',['isbn','title','author']) // only return the Persons name
  .exec(function (err, transactions) {
    if (err) return handleError(err);
    res.send(transactions);
  })
};

let createOne = function (req, res, next) {
  Transaction.create({
    memberid : req.body.memberid,
    days : req.body.days,
    out_date : new Date(req.body.out_date),
    due_date : new Date(req.body.due_date),
    in_date : new Date(req.body.in_date),
    fine : req.body.fine,
    booklist : req.body.booklist.split(',')
  }, function (error, customer){
    if(error) throw error;
    res.send(customer);
  })
};


module.exports = {
  getAll,
  createOne
}
