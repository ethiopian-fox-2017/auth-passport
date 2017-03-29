const db = require("mongoose");

module.exports = db.connect("mongodb://localhost/library");
