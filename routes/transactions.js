const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transactions_controller")
const passport = require('passport');
const token = require("../helpers/token");

router.post("/", token, transactionController.addTransaction)
router.get("/", token, transactionController.dataTransaction)
router.post("/update/:id", token, transactionController.updateTransaction)
router.get("/remove/:id", token, transactionController.removeTransaction)

module.exports = router
