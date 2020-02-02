const express = require("express");
const router = express.Router();
const inrController = require("../controllers/inrController")

router.get("/inrs", inrController.index);
router.get("/inrs/new", inrController.new);
router.post("/inrs/create", inrController.create);

module.exports = router;
