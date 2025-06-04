var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.post("/buscar", function (req, res) {
    perguntaController.buscar(req, res);
});

module.exports = router;

