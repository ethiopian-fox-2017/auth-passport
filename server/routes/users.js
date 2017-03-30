const express = require('express');
const router = express.Router();
const passport = require('passport')
const User = require ('../controllers/userController');

router.post('/register', User.register);
router.post('/login', passport.authenticate('local', {session : false}), User.login)
// router.get('/:id', User.findOne);
// router.put('/:id', User.update);
// router.delete('/:id', User.delete);

module.exports = router
