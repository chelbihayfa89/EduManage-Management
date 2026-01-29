const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {
  addSpeciality,
  getSpecialities,
  getSpecialityById,
} = require("../controllers/speciality.controller");

router.post("/", authMiddleware, authorize("admin"), addSpeciality);
router.get("/", getSpecialities);
router.get("/:id", authMiddleware, authorize("admin"), getSpecialityById);

module.exports = router;
