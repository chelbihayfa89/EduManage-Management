const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {getStudentCoursesForParent, getStudentCourseNote} = require("../controllers/parent.controller");

router.get("/students/with-courses", authMiddleware, authorize("parent"), getStudentCoursesForParent);
router.get("/students/:childId/courses/:courseId/note", authMiddleware, authorize("parent"), getStudentCourseNote)

module.exports = router;
