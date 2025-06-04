var express = require("express");
var router = express.Router();

var respostaController = require("../controllers/respostaController");

router.post("/cadastrar", function (req, res) {
    respostaController.cadastrar(req, res);
});

router.post("/calcular", function (req, res) {
    respostaController.calcular(req, res);
});

module.exports = router;