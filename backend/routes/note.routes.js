const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.js");
const authorize = require("../middleware/authorize.js");

const { addNoteToStudent, getCourseNote} = require("../controllers/note.controller.js");

router.post("/", authMiddleware, authorize("teacher"), addNoteToStudent);
router.get("/course/:courseId", authMiddleware, authorize("student"), getCourseNote);

module.exports = router;
