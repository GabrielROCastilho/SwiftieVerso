var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/signos", function (req, res) {
    graficoController.signos(req, res);
});

router.get("/eras", function (req, res) {
    graficoController.eras(req, res);
});

router.get("/albuns", function (req, res) {
    graficoController.albuns(req, res);
});

module.exports = router;