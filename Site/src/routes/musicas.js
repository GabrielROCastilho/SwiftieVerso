var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

router.get("/buscar", function (req, res) {
    musicaController.buscar(req, res);
});

module.exports = router;