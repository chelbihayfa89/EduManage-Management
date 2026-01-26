const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  getTeachersBySpeciality, getAllTeachers
} = require("../controllers/teacher.controller");

// search teacher by speciality
router.get("/", getTeachersBySpeciality);

// all teachers
router.get("/all", getAllTeachers);

module.exports = router;
