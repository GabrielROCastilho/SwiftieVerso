var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/estadoscomasmaiorespontuacoes", function (req, res) {
    graficoController.estadosComAsMaioresPontuacoes(req, res);
});

// router.get("/albunsfavoritos", function (req, res) {
//     graficoController.albunsFavoritos(req, res);
// });

router.get("/signos", function (req, res) {
    graficoController.signos(req, res);
});

module.exports = router;