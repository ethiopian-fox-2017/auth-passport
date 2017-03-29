var jwt = require('jsonwebtoken');
require('dotenv').config()

let authorization = (req, res, next) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded) => {
    if(decoded) {
      if(decoded.username == 'juan') {
          next();
      } else {
          res.send('you are not authorized')
      }

    } else {
      res.send('you are not authorized');
    }
  })
}

module.exports = authorization;