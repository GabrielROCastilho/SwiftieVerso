var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/buscar", function (req, res) {
    quizController.buscar(req, res);
});

router.get("/buscar", function (req, res){
    quizController.buscarNumeroDePerguntas(req, res)
})

module.exports = router;

