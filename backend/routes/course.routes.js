const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.js");
const authorize = require("../middleware/authorize.js");

const {
  getCourses,
  getCourseById,
  deleteCourseById,
  updateCourse,
  addCourse,
  getTeacherCourses,
  affectStudentToCourse
} = require("../controllers/course.controller.js");

// 1️⃣ Les routes fixes avant les routes dynamiques

// les cours d'un teacher (route fixe)
router.get("/teacher", authMiddleware, authorize("teacher"), getTeacherCourses);

// lire tous les cours
router.get("/", getCourses);

// lire un cours par id (route dynamique)
router.get(
  "/:id",
  authMiddleware,
  authorize("teacher", "admin"),
  getCourseById,
);

// mettre à jour un cours
router.put("/:id", updateCourse);

// supprimer un cours
router.delete(
  "/:id",
  authMiddleware,
  authorize("teacher", "admin"),
  deleteCourseById,
);

// ajouter un cours
router.post("/", authMiddleware, authorize("teacher", "admin"), addCourse);

// affecter student a un cours
router.post("/:id/students", authMiddleware, authorize("admin"), affectStudentToCourse)

module.exports = router;
