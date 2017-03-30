const Book = require('../models/book')


module.exports = {
  create : function(req, res){
    Book.create(req.body, (err, book) => {
      if (err) res.json(err)

      res.json(book)
    })
  },

  delete : function(req, res){
    Book.findByIdAndRemove(req.params.id)
        .exec((err, books) => {
          if (err)
            res.json({success : false, msg : err})
          else
            res.json({success : true, msg : 'success for delete'})

        })

  },

  update : function(req, res){
    Book.findByIdAndUpdate(req.params.id,{$set : req.body},{new : true})
          .exec(( err, book ) => {
            if (err) res.json({success : false, data : null})

            res.json({success : true, data : book})
          })
  },

  search : function(req, res) {
    //search title with SQL commands LIKE %title%
    Book.find({"title": { $regex: req.query.title, $options: 'i' }}, function(err, books) {

      if (err)
        res.json({success : false, books : null})
      else
        res.json({success : true, books : books.length, query : req.query.title})
    });

  },

  list : function(req, res){
    Book.find({}, (err, data) => {
      if (err)
        res.json({succes : false, data : null})
      else
        res.json(data)

    })
  },

  findWithId : function(req, res) {
    Book.findById(req.params.id)
        .exec((err, book) => {
          if (err)
            res.json({success : false, data : null})
          else
            res.json({success : true, data : book})
        })
  }
}
