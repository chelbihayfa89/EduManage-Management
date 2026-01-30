const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {
  addSpeciality,
  getSpecialities,
  getSpecialityById,
  updateSpecialitty,
  deleteSpeciality
} = require("../controllers/speciality.controller");

router.post("/", authMiddleware, authorize("admin"), addSpeciality);
router.get("/", getSpecialities);
router.get("/:id", authMiddleware, authorize("admin"), getSpecialityById);
router.patch("/:id", authMiddleware, authorize("admin"), updateSpecialitty);
router.delete("/:id", authMiddleware, authorize("admin"), deleteSpeciality);

module.exports = router;
