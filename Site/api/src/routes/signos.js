var express = require("express");
var router = express.Router();

var signoController = require("../controllers/signoController");

router.get("/buscar", function (req, res) {
    signoController.buscar(req, res);
});

module.exports = router;