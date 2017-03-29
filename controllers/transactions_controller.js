const db = require("../models/transactions_model");

let addTransaction = (req, res) => {
  let arrBookList;
  if (/[,]/gi.test(req.body.booklist)) {
    arrBookList = req.body.booklist.split(",");
  }else {
    arrBookList = req.body.booklist
  }
  db.create({
    "memberid": req.body.memberid,
    "days": req.body.days,
    "out_date": new Date(),
    "due_date": new Date(),
    "in_date": new Date(),
    "fine": req.body.fine,
    "booklist": arrBookList,
  }, (err, dataSaved) => {
    if (!err) {
      res.send(dataSaved)
    }else {
      res.send(err)
    }
  })
}

let dataTransaction = (req, res) => {
  db.find({})
    .populate("memberid")
    .populate("booklist")
    .exec((err, result) => {
      if (!err) {
        res.send(result)
      }else {
        res.send(err)
      }
    })
}

let updateTransaction = (req, res) => {
  let arrBookList;
  if (/[,]/gi.test(req.body.booklist)) {
    arrBookList = req.body.booklist.split(",");
  }else {
    arrBookList = req.body.booklist
  }
  db.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        "memberid": req.body.memberid,
        "days": req.body.days,
        "out_date": new Date(),
        "due_date": new Date(),
        "in_date": new Date(),
        "fine": req.body.fine,
        "booklist": arrBookList,
      }
    }, {new: true}, (err, books) => {
      if (!err) {
        res.send(`Data transaction with id ${req.params.id} is updated!`)
      }else {
        res.send(err)
      }
    })
}

let removeTransaction = (req, res) => {
  db.findByIdAndRemove(req.params.id, (err, result) => {
    if (!err) {
      res.send(`Data transaction with id ${req.params.id} is removed!`)
    }
  })
}

module.exports = {
  addTransaction, dataTransaction, updateTransaction, removeTransaction
}
