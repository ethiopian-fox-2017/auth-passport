'use strict'

let Customer = require('../models/customer');

let getAll = function (req, res, next) {
  Customer.find(function (err, customers){
    if(err){
      res.json({error: err});
    } else {
      res.json(customers);
    }
  })
};

let createOne = function (req, res, next) {
  Customer.create({
    name : req.body.name,
    memberid : req.body.memberid,
    address : req.body.address,
    zipcode : req.body.zipcode,
    phone : req.body.phone
  }, function (error, customer){
    if(error) throw error;
    res.send(customer);
  })
};

let update = function (req, res, next) {
  Customer.findOne({memberid: req.params.memberid}, function (err, customer) {
  if (err) return handleError(err);

  customer.name = req.body.name;
  customer.address = req.body.address;
  customer.zipcode = req.body.zipcode;
  customer.phone = req.body.phone;
  customer.save(function (err, updatedCustomer) {
    if (err) return handleError(err);
    res.send(updatedCustomer);
  });
  });
};

let deleteOne = function (req, res, next) {
  Customer.findOne({memberid: req.params.memberid}).remove(function(err){
    res.send(err);
  })
};

module.exports = {
  getAll,
  createOne,
  update,
  deleteOne
}
