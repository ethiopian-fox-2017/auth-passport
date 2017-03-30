const Customer = require('../models/customer')
var shortid = require('shortid');

module.exports = {
  create : function(req, res){
    req.body.memberid = shortid.generate() //membuat random generate
    Customer.create(req.body, (err, customer) => {
      if (err)
        res.json({success : false, data : null})
      else
        res.json({success : true, data : customer})
    })
  },

  delete : function(req, res){
    Customer.findByIdAndRemove(req.params.id)
        .exec((err, customer) => {
          if (err)
            res.json({success : false, data : null})
          else
            res.json({success : true, data : customer})

        })
  },

  update : function(req, res){
    req.body.memberid = shortid.generate() //membuat random generate
    Customer.findByIdAndUpdate(req.params.id,{$set : req.body})
          .exec(err => {
            if (err) res.json({success : false})

            res.json({success : true})
          })
  },

  list : function(req, res){
    Customer.find({}, (err, data) => {
      if (err)
        res.json({success : false, data : null})
      else
        res.json({success : true, data : data})
    })
  },

  search : function(req, res){
    Customer.find({"name": { $regex: req.query.name, $options: 'i' }}, function(err, customer) {
    //Do your action here..
      if (err)
        res.json({success : false, books : null})
      else
        res.json({success : true, customer : customer, query : req.query.name})
    });
  },

  find : function(req, res){
    Customer.findById(req.params.id)
            .exec((err, customer) => {
              if (err)
                res.json({success : false, data : null})
              else
                res.json({success : true, data : customer})

            })
  }



}
