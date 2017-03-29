'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

let authenticate = function (req, res, next) {
  jwt.verify(req.headers.token, process.env.SECRET, function(err, decoded) {
    if(err) {
      res.send(err);
    }
    else {
      next();
    }
  });
}

module.exports = {
  authenticate
}
