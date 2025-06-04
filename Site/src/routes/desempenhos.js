var express = require("express");
var router = express.Router();

var desempenhoController = require("../controllers/desempenhoController");

router.post("/cadastrar", function (req, res) {
    desempenhoController.cadastrar(req, res);
});

router.post("/buscar", function (req, res) {
    desempenhoController.buscar(req, res);
});

router.post("/buscarDadosUsuario", function (req, res) {
    desempenhoController.buscarDadosUsuario(req, res);
});

module.exports = router;