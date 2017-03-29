var Transaction = require('../models/transaction');

var transaction = {};

transaction.create = (req,res,next) => {
  let booklistArr = req.body.booklist.split(',')
  Transaction.create({
    "memberid"  : req.body.memberid,
    "days"      : req.body.days,
    "out_date"  : new Date(req.body.out_date),
    "due_date"  : new Date(req.body.due_date),
    "in_date"   : new Date(req.body.in_date),
    "fine"      : req.body.fine,
    "booklist"  : booklistArr
  }, (error,result) => {
    if(error){
      res.send(error);
    } else {
      res.send(result);
    }
  });
}

transaction.findAll = (req,res,next) => {
  Transaction
  .find()
  .populate('booklist', ['isbn','title','stock'])
  .exec((error,transaction) => {
    if(error){
      res.send(error);
    } else {
      res.send(transaction);
    }
  });
}

transaction.delete = (req,res,next) => {
  Transaction.findOneAndRemove(req.params.id, (err,transaction) => {
    if (err) {
      res.send ('Delete transaction failed');
    } else {
      res.send ('Transaction deleted');
    }
  });
}

module.exports = transaction;
