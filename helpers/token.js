var express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()

var methods = {}

methods.generateToken = function (req,res,send) {
  let token = jwt.sign(res.req.user, process.env.SECRETE_WORD_TOKEN, { expiresIn: '1h' });
  res.json(token);
}

module.exports = methods
