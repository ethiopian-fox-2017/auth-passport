var db = require('../models/transaction');

let getAllTransaction = function(req, res) {
  db.find()
    .populate('booklist', 'title')
    .exec((err, data) => {
      if (err) {
        res.send(err.message)
      } else {
        res.send(data)
      }
    })
}

let createTransaction = function(req, res) {
  let testbooklist;

  if (/[,]/.test(req.body.booklist)) {
    testbooklist = req.body.booklist.split(",")
  } else {
    testbooklist = req.body.booklist
  }
  // res.send("transss")
  db.create({
    "memberid"  : req.body.memberid,
    "days"      : req.body.days,
    "out_date"  : req.body.out_date,
    "due_date"  : req.body.due_date,
    "in_date"   : req.body.in_date,
    "fine"      : req.body.fine,
    "booklist"  : testbooklist
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}

let updateTransaction = function(req, res) {
  let _booklist;
  if (/[,]/.test(req.body.booklist)) {
    _booklist = req.body.booklist.split(",")
  } else {
    _booklist = req.body.booklist
  }

  db.findByIdAndUpdate(req.params.id, {
    $set : {
      "memberid"  : req.params.memberid,
      "days"      : req.params.days,
      "out_date"  : req.params.out_date,
      "due_date"  : req.params.due_date,
      "in_date"   : req.params.in_date,
      "fine"      : req.params.fine,
      "booklist"  : _booklist
    }
  }, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Data berhasil di update !")
    }
  })
}

let deleteTransaction = function(req, res) {
  db.findByIdAndRemove(req.params.id, function(err, data) {
    if (err) {
      res.send(err)
    } else {
      res.send("Data berhasil di delete!")
    }
  })
}


module.exports = {
  getAllTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction
}
