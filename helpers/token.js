let jwt = require('jsonwebtoken');
require('dotenv').config()

let verifyToken = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, function(err, decoded) {
    if (decoded) {
      req.decoded = decoded;
      console.log(req.decoded);
      next();
    }else{
      res.send("Unauthorized")
    }
  });
}

module.exports = verifyToken
