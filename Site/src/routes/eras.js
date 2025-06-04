var express = require("express");
var router = express.Router();

var eraController = require("../controllers/eraController");

router.get("/buscar", function (req, res) {
    eraController.buscar(req, res);
});

module.exports = router;