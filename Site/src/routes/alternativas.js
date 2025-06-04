var express = require("express");
var router = express.Router();

var alternativaController = require("../controllers/alternativaController");

router.post("/buscar", function (req, res) {
    alternativaController.buscar(req, res);
});

module.exports = router;

