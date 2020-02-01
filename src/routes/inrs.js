const express = require("express");
const router = express.Router();

const inrController = require("../controllers/inrController")

router.get("/inrs", inrController.index);

module.exports = router;
