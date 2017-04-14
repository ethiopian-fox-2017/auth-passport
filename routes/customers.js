const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customers_controller")
const passport = require('passport');
const token = require("../helpers/token");

router.post("/", token, customerController.addCustomer)
router.get("/", token, customerController.dataCustomer)
router.post("/update/:id", token, customerController.updateCustomer)
router.get("/remove/:id", token, customerController.removeCustomer)

module.exports = router
