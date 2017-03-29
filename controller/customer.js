var Customer = require('../models/customer');
var passHash = require('password-hash');
var passport = require('passport');
var passportLocal = require('passport-local');
var Strategy = passportLocal.Strategy;
var jwt = require('jsonwebtoken');
require('dotenv').config();

var customer = {}

passport.use(new Strategy((username,password,callback) => {
  Customer.findOne({username:username}, (error,user) => {
    if(error || user == null){
      callback('username not found')
    } else {
      if(password != null && passHash.verify(password, user.password)){
        callback(null,user)
      } else {
        callback('invalid username or password')
      }
    }
  })
}));

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
  Customer.find((err,customers) => {
    if (err){
      res.send({error:err});
    } else {
      res.send(customers);
    }
  })
}

customer.update = (req,res,next) => {
  let password = passHash.generate(req.body.password);
  Customer.findOneAndUpdate({
    memberid : req.params.memberid
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
  Customer.findOneAndRemove(req.params.memberid, (err,book) => {
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
