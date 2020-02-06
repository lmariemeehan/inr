const express = require("express");
const router = express.Router();
const medicationController = require("../controllers/medicationController");

router.get("/medications/", medicationController.index);
router.get("/medications/new", medicationController.new);
router.post("/medications/create", medicationController.create);
router.get("/medications/:id", medicationController.show);
router.post("/medications/:id/destroy", medicationController.destroy);
router.get("/medications/:id/edit", medicationController.edit);
router.post("/medications/:id/update", medicationController.update);

module.exports = router;
