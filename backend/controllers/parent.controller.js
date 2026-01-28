const mongoose = require("mongoose");

const Course = require("../models/course.model");
const User = require("../models/user.model");
const Note = require("../models/note.model")

const getStudentCoursesForParent = (req, res) => {
  const parentId = req.user._id;
  const childPhone = req.query.childPhone;
  // récupérer le parent
  User.findById(parentId)
    .then((parent) => {
      if (!parent) return res.status(404).json({ message: "Parent not found" });
      User.findOne({ phone: childPhone })
        .then((student) => {
          if (!student)
            return res.status(404).json({ message: "Student not found" });
          if (student._id.toString() !== parent.childId.toString()) {
            return res
              .status(403)
              .json({ message: "This student is not linked to your account" });
          }
          Course.find({ studentsIds: student._id })
            .then((courses) => {
              return res.status(200).json({ student, courses });
            })
            .catch((err) => res.status(500).json({ message: err.message }));
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

const getStudentCourseNote = (req, res) => {
  const parentId = req.user._id;
  const childId = req.params.childId;
  const courseId = req.params.courseId;

  // Vérifie que le parent existe
  User.findById(parentId)
    .then((parent) => {
      if (!parent) return res.status(404).json({ message: "No parent found" });

      // Vérifie que l'étudiant existe
      return User.findById(childId);
    })
    .then((child) => {
      if (!child) return res.status(404).json({ message: "No student found" });

      // Cherche la note du cours
      return Note.findOne({ courseId, studentId: child._id });
    })
    .then((note) => {
      if (!note) return res.status(404).json({ message: "No note found" });

      return res.status(200).json({note});
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

module.exports = { getStudentCoursesForParent, getStudentCourseNote };
