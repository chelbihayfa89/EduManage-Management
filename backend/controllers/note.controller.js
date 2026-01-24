const Course = require("../models/course.model");
const User = require("../models/user.model");
const Note = require("../models/note.model");

const addNoteToStudent = (req, res) => {
  Course.findById(req.body.courseId)
    .then((course) => {
      if (!course) {
        return res
          .status(404)
          .json({ message: "No course found with this Id" });
      }

      User.findById(req.body.studentId)
        .then((student) => {
          if (!student) {
            return res
              .status(404)
              .json({ message: "No student found with this Id" });
          }

          // Vérification si la note existe déjà
          Note.findOne({
            courseId: req.body.courseId,
            studentId: req.body.studentId,
          })
            .then((existingNote) => {
              if (existingNote) {
                return res.status(409).json({
                  message:
                    "Note already exists for this student in this course",
                });
              }

              // Création de la note
              const note = new Note({
                courseId: req.body.courseId,
                studentId: req.body.studentId,
                note: req.body.note,
                evaluation: req.body.evaluation,
              });

              note
                .save()
                .then((savedNote) => {
                  return res.status(200).json({
                    message: "Note affected successfully",
                    note: savedNote,
                  });
                })
                .catch((err) => {
                  return res.status(500).json({
                    message: "Error adding note",
                    error: err.message,
                  });
                });
            })
            .catch((err) => {
              return res.status(500).json({
                message: "Error checking existing note",
                error: err.message,
              });
            });
        })
        .catch((err) => {
          return res.status(500).json({
            message: "Error finding student",
            error: err.message,
          });
        });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Error finding course",
        error: err.message,
      });
    });
};

const getCourseNote = (req, res) => {
  const courseId = req.params.courseId;
  const studentId = req.user._id;

  Course.findById(courseId).then((course) => {
    console.log("Course ID reçu :", courseId);

    if (!course) {
      return res.status(404).json({ message: "No course found with this Id" });
    }
    Note.findOne({ courseId: courseId, studentId: studentId }).then((note) => {
      if(!note) {
        return res.status(404).json({ message: "No note found with this student in this course" });
      }
      return res.status(200).json({ note });
    }).catch((err) => {
      return res.status(500).json({
        message: "Error finding note",
        error: err.message,
      });
    });
  }).catch((err) => {
      return res.status(500).json({
        message: "Error finding course",
        error: err.message,
      });
    });
};

module.exports = { addNoteToStudent, getCourseNote };
