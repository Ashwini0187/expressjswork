var express = require("express");
var router = express.Router();
var ctrhotels = require("../contollers/hotel.contollrs.js");

router.route("/").get(ctrhotels.HomePage);


module.exports = router;