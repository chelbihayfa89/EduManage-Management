const express = require("express");
const router = express.Router();

const {
  getCourses,
  getCourseById,
  deleteCourseById,
  updateCourse,
  addCourse,
} = require("../controllers/course.controller.js");

// lire tous les cours
router.get("/", getCourses);

// lire un cours par id
router.get("/:id", getCourseById);

// mettre à jour un cours
router.put("/:id", updateCourse);

// supprimer un cours
router.delete("/:id", deleteCourseById);

// ajouter un cours
router.post("/", addCourse);

module.exports = router;
