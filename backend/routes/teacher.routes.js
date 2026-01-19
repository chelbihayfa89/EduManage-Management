const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  getTeachers, getAllTeachers
} = require("../controllers/teacher.controller");

// search teacher by speciality
router.get("/", getTeachers);
router.get("/all", getAllTeachers);

module.exports = router;
