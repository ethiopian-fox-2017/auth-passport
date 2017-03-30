const User = require('../models/user')
var passwordHash = require('password-hash')
var jwt = require('jsonwebtoken')


module.exports = {
  signup : function(req, res){
      User.create({
        username : req.body.username,
        email : req.body.email,
        password : passwordHash.generate(req.body.password),
        role: 'user'
      },(err, data) => {
        if (err) res.json({success : false, msg : err, data : null})
        else
          res.json({success : true, msg : 'success create new user', data : data})
      })
  },

  signin : function(req, res){
    if (passwordHash.verify(req.body.password, req.user.password)){
      let token = jwt.sign({
        id : req.user.id,
        name : req.user.name,
        username : req.body.username,
        role : req.user.role
      },'rahasia')

      res.send(token)
    }else {
      res.json({error: true , msg : 'password salah'})
    }
    // let token = jwt.sign(req.user,'rahasia')
    // res.json(token)
  }
}
