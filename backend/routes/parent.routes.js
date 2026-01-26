const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {getStudentsByParent} = require("../controllers/parent.controller");

router.get("/students", authMiddleware, authorize("parent"), getStudentsByParent);

module.exports = router;
