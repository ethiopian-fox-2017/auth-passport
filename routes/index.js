var express = require('express');
var router = express.Router();
var User = require('../controllers/user')
var passport = require('passport')



router.post('/signup', User.signup)

router.post('/signin',  passport.authenticate('local',{session : false}), User.signin)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {

})



module.exports = router;
