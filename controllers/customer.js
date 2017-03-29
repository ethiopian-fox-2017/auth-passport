const Customer = require('../models/customer');

module.exports = {

  insertOne: function(req, res, next) {

    Customer.create(req.body, (err, customer) => {
      if (err) res.json(err)
      res.json(customer)
    })

  }, // insertOne

  findAll: function(req, res, next) {

    Customer.find({}, (err, customers) => {
      if (err) res.json(err)
      res.json(customers)
    })

  }, // findAll

  findOne: function(req, res, next) {

    Customer.findById(req.params.id, (err, customer) => {
      if (err) res.json(err)
      res.json(customer)
    })

  }, // findOne

  updateOne: function(req, res, next){

    Customer.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      .exec((err, customer) => {
        if (err) res.json(err)
        res.json(customer)
      })

  }, // updateOne

  deleteOne: function(req, res){

    Customer.findByIdAndRemove(req.params.id)
        .exec((err, customer) => {
          if (err) res.json(err)
          res.json(customer)
        })

  }, // deleteOne

  searchByName: function(req, res, next) {

    Customer.find({ name: { $regex: req.query.name, $options: 'i' }}, function(err, customers) {
      if (err) res.json(err)
      res.json(customers)
    });

  } // searchByName

}