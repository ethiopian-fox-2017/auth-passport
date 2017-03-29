const Transaction = require('../models/transaction')

module.exports = {

  createTransaction : (req, res)=> {
    let bookArr = (req.body.booklist).split(',')
    let newTransaction = Transaction({
      memberid: req.body.memberid,
      days: req.body.days,
      out_date: new Date(req.body.out_date),
      due_date: new Date(req.body.due_date),
      in_date: new Date(req.body.in_date),
      fine: req.body.fine,
      booklist: bookArr
    })
    newTransaction.save((err)=> {
        if(err) {
          res.send('Add new transaction failed')
        } else {
          res.send(`Transaction with member ID : ${req.body.memberid} added into Database`)
        }
    })
  },
  listTransaction : (req, res)=> {
    Transaction
      .find({})
      .populate('booklist')
      .exec((err, transactions)=> {
        if(err) {
          res.send('Request data failed')
        } else {
          res.send(transactions)
        }
      })
  }//,
  // deleteTransaction : (req, res)=> {
  //   Transaction.findByIdAndRemove(req.params.objectId, (err, transaction)=> {
  //     if(err){
  //       res.send('Delete transaction failed')
  //     } else {
  //       res.send(`Transaction with member ID : ${transaction.memberid} deleted`)
  //     }
  //   })
  // },
  // editTransaction : (req, res)=> {
  //   let bookArr = (req.body.booklist).split(',')
  //   Transaction.findOneAndUpdate(
  //     { _id: req.params.objectId},
  //     {
  //       memberid: req.body.memberid,
  //       days: req.body.days,
  //       out_date: new Date(req.body.out_date),
  //       due_date: new Date(req.body.due_date),
  //       in_date: new Date(req.body.in_date),
  //       fine: req.body.fine,
  //       booklist: bookArr
  //     }, (err, transaction)=> {
  //       if(err) {
  //         res.send('Update data Failed')
  //       } else {
  //         res.send(`Transaction with member ID : ${transaction.memberid} updated`)
  //       }
  //     }
  //   )
  // }

}