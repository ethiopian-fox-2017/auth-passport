const jwt = require('jsonwebtoken')

module.exports = {

  verifyAdmin: (req, res, next)=> {
    jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, verified)=> {
      if(verified) {
        if(verified.isAdmin === true) {
          next()
        } else {
          res.send(`${verified.username} you are not authorized`)
        }
      } else {
        res.send('Login Failed')
      }
    })
  }
}