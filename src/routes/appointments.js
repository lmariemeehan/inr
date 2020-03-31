const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

router.get("/appointments/", appointmentController.index);
router.get("/appointments/new", appointmentController.new);
router.post("/appointments/create", appointmentController.create);
router.get("/appointments/:id", appointmentController.show);
router.post("/appointments/:id/destroy", appointmentController.destroy);
router.get("/appointments/:id/edit", appointmentController.edit);
router.post("/appointsments/:id/update", appointmentController.update);

module.exports = router;