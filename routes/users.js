const express = require("express");
const router = express.Router();
const passport = require('passport');
const userController = require("../controllers/users_controller")
const token = require("../helpers/token");
const auth = passport.authenticate('local', { session: false })

router.post("/login", auth, userController.showToken)
router.post("/signup", token, userController.createUser)
router.get("/", token, userController.dataUser)
router.post("/update/:id", token, userController.updateUser)
router.get("/remove/:id", token, userController.removeUser)

module.exports = router
