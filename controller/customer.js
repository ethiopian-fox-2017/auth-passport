var Customer = require('../models/customer');
var passHash = require('password-hash');
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;
var jwt = require('jsonwebtoken');
require('dotenv').config();

var customer = {}

customer.create = (req,res,next) => {
  let password = passHash.generate(req.body.password);
  Customer.create({
    "name"     : req.body.name,
    "memberid" : req.body.memberid,
    "address"  : req.body.address,
    "zipcode"  : req.body.zipcode,
    "phone"    : req.body.phone,
    "username" : req.body.username,
    "password" : password,
    "role"     : req.body.role || 'customer'
  }, (error,result) => {
    if(error){
      res.send(error);
    } else {
      res.send(result);
    }
  })
}

customer.findAll = (req,res,next) => {
  Customer.find((err,members) => {
    if (err){
      res.send({error:err});
    } else {
      res.send(members);
    }
  })
}

customer.findOne = (req,res,next) => {
  Customer.findOne({
    _id:req.params.id
  },(err,member) => {
    if (err) {
      res.send ('Customer not found');
    } else {
      res.send (member);
    }
  })
}

customer.update = (req,res,next) => {
  let password = passHash.generate(req.body.password);
  Customer.findOneAndUpdate({
    _id : req.params.id
  },{
      "name"     : req.body.name,
      "memberid" : req.body.memberid,
      "address"  : req.body.address,
      "zipcode"  : req.body.zipcode,
      "phone"    : req.body.phone,
      "username" : req.body.username,
      "password" : password,
      "role"     : req.body.role || 'customer'
  }, (err,book) => {
    if (err) {
      res.send ('Member is not updated');
    } else {
      res.send ('Member updated');
    }
  });
}

customer.delete = (req,res,next) => {
  Customer.findOneAndRemove(req.params.id, (err,member) => {
    if (err) {
      res.send ('Delete member failed');
    } else {
      res.send ('Member deleted');
    }
  });
}

customer.signup = (req,res,next) => {
  let password = passHash.generate(req.body.password);
  Customer.create({
    "name"     : req.body.name,
    "memberid" : req.body.memberid,
    "address"  : req.body.address,
    "zipcode"  : req.body.zipcode,
    "phone"    : req.body.phone,
    "username" : req.body.username,
    "password" : password,
    "role"     : req.body.role || 'customer'
  }, (error,result) => {
    if(error){
      res.send(error);
    } else {
      res.send(result);
    }
  })
}

customer.signin = (req,res,next) => {
  let user = req.user;
  let token = jwt.sign({username:user.username,role:user.role}, process.env.SECRETKEYS);
  res.send(token);
}

module.exports = customer
