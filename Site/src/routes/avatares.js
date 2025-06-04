var express = require("express");
var router = express.Router();

var avatarController = require("../controllers/avatarController");

router.get("/buscar", function (req, res) {
    avatarController.buscar(req, res);
});

module.exports = router;