const jwt = require('jsonwebtoken');

module.exports = {
  isAuthorized: function(req, res, next) {

    if (req.headers.token == undefined) {
      res.send('You are not authorized to access')
    } else {
      jwt.verify(req.headers.token, 'secret', function(err, decoded) {
        if (err) {
          res.send(err)
        } else {
          if (!err && decoded.role === 'admin' ) {
            next()
          } else {
            res.send('You are not authorized to access')
          }
        }

      })
    }

  } // isAuthorized

}