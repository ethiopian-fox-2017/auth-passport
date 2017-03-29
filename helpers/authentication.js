var jwt = require('jsonwebtoken')
require('dotenv').config();

var authenticateAdmin = function(req, res, next) {
  jwt.verify(req.headers.token, process.env.SECRETKEYS, function(err, decoded){
    if(decoded){
      if (decoded.role === 'admin') {
        next()
      } else {
        res.send({message: "You are not authorized to use this feature"})
      }
    } else {
      res.send(err)
    }
  })
}

var authenticateBoth = function(req, res, next) {
  jwt.verify(req.headers.token, process.env.SECRETKEYS, function(err, decoded){
    if(decoded){
      if (decoded.role === 'admin' || decoded.role === 'member') {
        next()
      } else {
        res.send({message: "You are not authorized to use this feature"})
      }
    } else {
      res.send(err)
    }
  })
}


module.exports = {
  authenticateAdmin,
  authenticateBoth
}
