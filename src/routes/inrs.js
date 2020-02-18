const express = require("express");
const router = express.Router();
const inrController = require("../controllers/inrController");
const helper = require("../auth/helpers");

router.get("/inrs/", inrController.index);
router.get("/inrs/new", inrController.new);
router.post("/inrs/create",
  helper.ensureAuthenticated,
  inrController.create);
router.get("/inrs/:id", inrController.show);
router.post("/inrs/:id/destroy", inrController.destroy);
router.get("/inrs/:id/edit", inrController.edit);
router.post("/inrs/:id/update", inrController.update);

module.exports = router;
