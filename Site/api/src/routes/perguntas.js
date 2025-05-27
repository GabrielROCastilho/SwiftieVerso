var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.get("/buscar", function (req, res) {
    perguntaController.buscar(req, res);
});

module.exports = router;

