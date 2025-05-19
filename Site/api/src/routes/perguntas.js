var express = require("express");
var router = express.Router();

var perguntaController = require("../controllers/perguntaController");

router.get("/", function (req, res) {
    perguntaController.buscarPergunta(req, res);
});

module.exports = router;

