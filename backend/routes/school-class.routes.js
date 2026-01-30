const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const { addSchoolClass, getSchoolClasses} = require("../controllers/school-class.controller");

router.get("/", authMiddleware, authorize("admin"), getSchoolClasses);
router.post("/", authMiddleware, authorize("admin"), addSchoolClass);

module.exports = router;
