var Customer = require('../models/customer');

var addCustomer = function(req, res, next) {
  Customer.create({
    "name" : req.body.name,
    "memberid" : req.body.memberid,
    "address" : req.body.address,
    "zipcode" : req.body.zipcode,
    "phone" : req.body.phone
  }, function(err, customer) {
    if(err){
      res.send(err)
    } else {
      res.send(customer)
    }
  })
}

var showCustomers = function(req, res, next) {
  Customer.find(function(err, customers) {
    if(err) {
      res.send({error: err})
    } else {
      res.send(customers)
    }
  })
}

var deleteCustomer = function(req, res) {
  Customer.findByIdAndRemove(req.params.customerId, function (err, customer) {
    if(err){
      res.send('Deleting Customer Failed')
    } else {
      res.send(`Customer with name "${customer.name}" has been succesfully deleted from Database.`)
    }
  });
}

var updateCustomer = function(req, res) {
  Customer.findOneAndUpdate(
    {
      "_id" : req.params.customerId
    },
    {
      "name" : req.body.name,
      "memberid" : req.body.memberid,
      "address" : req.body.address,
      "zipcode" : req.body.zipcode,
      "phone" : req.body.phone
    }, function(err, customer) {
      if(err){
        res.send(err)
      } else {
        res.send(`Customer info with name "${customer.name}" has been succesfully updated.`)
      }
    })
}

module.exports = {
  addCustomer,
  showCustomers,
  deleteCustomer,
  updateCustomer
}
