const Transaction = require('../models/transaction');

module.exports = {

  insertOne: function(req, res, next) {

    let newTransaction = new Transaction({
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: req.body.out_date,
      due_date: req.body.due_date,
      in_date: req.body.in_date,
      fine: req.body.fine,
    })
    newTransaction.booklist = req.body.booklist.split(';')
    newTransaction.save((err, transaction) => {
      if (err) res.json(err)
      res.json(transaction)
    })

    // use json instead
    // Transaction.create(req.body, (err, transaction) => {
    //   if (err) res.json(err)
    //   res.json(transaction)
    // })

  }, // insertOne

  findAll: function(req, res, next) {

    Transaction.find()
      .populate('booklist')
      .exec((err, transactions) => {
      if (err) res.json(err)
      res.json(transactions)
    })

  }, // findAll

  findOne: function(req, res, next) {

    Transaction.findById(req.params.id)
      .populate('booklist')
      .exec((err, transaction) => {
      if (err) res.json(err)
      res.json(transaction)
    })

  }, // findOne

  updateOne: function(req, res, next){

    Transaction.findById(req.params.id)
      .exec((err, transaction) => {

        transaction.memberid = req.body.memberid
        transaction.days = req.body.days
        transaction.out_date = req.body.out_date
        transaction.due_date = req.body.due_date
        transaction.in_date = req.body.in_date
        transaction.fine = req.body.fine
        transaction.booklist = req.body.booklist.split(';')

        transaction.save((err, transaction) => {
          if (err) res.json(err)
          res.json(transaction)
        })

      })

    // json
    // Transaction.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    //   .exec((err, transaction) => {
    //     if (err) res.json(err)
    //     res.json(transaction)
    //   })

  }, // updateOne

  deleteOne: function(req, res){

    Transaction.findByIdAndRemove(req.params.id)
        .exec((err, transaction) => {
          if (err) res.json(err)
          res.json(transaction)
        })

  }, // deleteOne

  searchById: function(req, res, next) {

    Transaction.find({ _id: { $regex: req.query.id, $options: 'i' }}, function(err, customers) {
      if (err) res.json(err)
      res.json(customers)
    });

  } // searchById

}