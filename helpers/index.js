var jwt = require('jsonwebtoken');

let authorization = function(req, res, next) {
  jwt.verify(req.headers.token, "agusto", function(err, decoded) {
    if (decoded) {
      if (decoded.username == "danilags") {
        next()
      } else {
        res.send("Anda tidak memiliki akses !")
      }
    } else {
      res.send("Anda tidak memiliki akses !")
    }
  })
}


module.exports = authorization