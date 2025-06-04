var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/atualizar", function (req, res){
    usuarioController.atualizar(req, res);
});

router.post("/buscarDados", function (req, res){
    usuarioController.buscarDados(req, res);
});

module.exports = router;