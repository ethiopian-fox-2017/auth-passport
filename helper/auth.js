

const jwt = require('jsonwebtoken')

module.exports = {

  isAuthenticated : function(req, res, next){
    jwt.verify(req.headers.tokens, 'rahasia', (err , decoded) => {
        if (decoded == null || decoded.role != 'admin'){
          res.send('Admin only')
        }else {
          console.log(decoded);
          next()
        }

    })
  }
}
