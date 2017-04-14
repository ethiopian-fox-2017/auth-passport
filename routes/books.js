const express = require("express");
const router = express.Router();
const bookController = require("../controllers/books_controller");
const passport = require('passport');
const token = require("../helpers/token");

router.post("/", token, bookController.createBook)
router.get("/", token, bookController.dataBook)
router.post("/update/:id", token, bookController.updateBook)
router.get("/remove/:id", token, bookController.removeBook)

module.exports = router
