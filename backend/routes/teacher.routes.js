const express = require("express");
const router = express.Router();

const { getTeachers } = require("../controllers/teacher.controller");

// search teacher by speciality
router.get("/", getTeachers);

module.exports = router;
