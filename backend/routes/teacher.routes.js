const express = require("express");
const router = express.Router();

const {
  searchTeacherBySpeciality,
} = require("../controllers/teacher.controller");

// search teacher by speciality
router.get("/:speciality", searchTeacherBySpeciality);

module.exports = router;
