const Transaction = require('../models/transaction'),
      Book = require('../models/transaction')


module.exports = {
  create :  function(req, res, next)  {

    let books = req.body.books.split(';')
    let newTransaction = new Transaction(req.body)
    books.forEach(buku => {
        newTransaction.booklist.push(buku)
    })

    newTransaction.save((err, data) => {
      if (err) res.json({success : false, error : err})

      res.json(data)
    })
  },

  update : function(req, res){

      Transaction.findById(req.params.id)
                  .populate('booklist')
                  .exec((err, trans) => {
                    if (err) res.json({success : false, data : null})
                    else {
                      let books = req.body.books.split(';')
                      let newTransaction = new Transaction(req.body)
                      books.forEach(buku => {
                          newTransaction.booklist.push(buku)
                      })

                      newTransaction.save((err, data) => {
                        if (err) res.json({success : false, error : err})

                        res.json(data)
                      })
                    }
                  })

  },

  delete : function(req, res){
    Transaction.findByIdAndRemove(req.params.id)
        .exec((err, books) => {
          if (err)
            res.json({success : false, msg : err})
          else
            res.json({success : true, msg : 'success for delete'})

        })

  },

  findAll : function(req, res){

      Transaction.find()
                  .populate('booklist')
                  .exec((err, trans) => {
                    res.json(trans)
                  })


  },

  findId : function(req, res) {

     Transaction.findById(req.params.id)
                 .populate('booklist')
                 .exec((err, trans) => {
                   if (err) res.json({success : false, data : null})
                   res.json({success: true, data : trans})
                 })
  }
}
