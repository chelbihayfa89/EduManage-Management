const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const getStudents = require("../controllers/student.controller");

router.get("/", authMiddleware, authorize("admin"), getStudents);

module.exports = router;
