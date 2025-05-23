var express = require("express");
var router = express.Router();

var estadoController = require("../controllers/estadoController");

router.get("/buscar", function (req, res) {
    estadoController.buscar(req, res);
});

module.exports = router;