const Transaction = require('../models/transaction');


let readTransaction = (req, res) => {
  Transaction.find({})
             .populate('memberid','memberid')
             .populate('booklist','title')
             .exec((err,results) => {
               if (err) {
                 res.send(err.message);
               } else {
                 res.send(results)
               }
             })
}

let createTransaction = (req ,res) => {
  let _booklist;
  if(/[,]/.test(req.body.booklist)){
    _booklist = req.body.booklist.split(',');
  } else {
    _booklist = req.body.booklist
  }

  let newTransaction = new Transaction({
    memberid:req.body.memberid,
    days:req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: req.body.fine,
    booklist: _booklist
  })

  newTransaction.save((err,data) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send(data);
    }
  })

}

let deleteTransaction = (req, res) => {
  Transaction.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send('data berhasil didelet');
    }
  })
}


let updateTransaction = (req, res) => {

  let _booklist;

  if(/[,]/.test(req.body.booklist)){
    _booklist = req.body.booklist.split(',');
  } else {
    _booklist = req.body.booklist
  }


  Transaction.findByIdAndUpdate(req.params.id,{
    memberid:req.body.memberid,
    days:req.body.days,
    out_date: new Date(),
    due_date: new Date(),
    in_date: new Date(),
    fine: req.body.fine,
    booklist: _booklist
  },(err) => {
    if(err) {
      res.send(err.message);
    } else {
      res.send('data berhasil didelet');
    }
  })
}


module.exports = {createTransaction, deleteTransaction, updateTransaction,readTransaction};