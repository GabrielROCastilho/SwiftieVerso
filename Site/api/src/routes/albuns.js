var express = require("express");
var router = express.Router();

var albumController = require("../controllers/albumController");

router.get("/buscar", function (req, res) {
    albumController.buscar(req, res);
});

module.exports = router;