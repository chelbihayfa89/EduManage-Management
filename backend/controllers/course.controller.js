const Course = require("../models/course.model");
const User = require("../models/user.model");

const getCourses = (req, res) => {
  if (req.user == null) {
    Course.find()
      .populate("teacherId", "firstName lastName")
      .populate("studentsIds", "firstName lastName")
      .then((courses) => {
        res.status(200).json({ courses });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  }
};

const getCourseById = (req, res) => {
  const role = req.user.role;
  const userId = req.user._id;
  Course.findById(req.params.id) // recherche par _id
    .then((course) => {
      if (!course) {
        return res.status(404).json({ message: "No course found" });
      }
      if (role === "admin") {
        return res.status(200).json({ course });
      }
      if (role === "teacher") {
        if (course.teacherId.toString() === userId) {
          return res.status(200).json({ course });
        } else {
          return res.status(401).json({ message: "Unauthorized" });
        }
      }

      return res.status(403).json({ message: "Forbidden" });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const deleteCourseById = (req, res) => {
  const userId = req.user._id;
  const role = req.user.role;
  const courseId = req.params.id;

  // 1️⃣ Chercher le course
  Course.findById(courseId)
    .then((foundCourse) => {
      if (!foundCourse) {
        return res.status(404).json({ message: "No course found" });
      }

      // 2️⃣ Admin → suppression directe
      if (role === "admin") {
        return Course.deleteOne({ _id: courseId }).then((deleteResponse) => {
          if (deleteResponse.deletedCount === 1) {
            return res
              .status(200)
              .json({ message: "Course deleted successfully" });
          } else {
            return res.status(500).json({ message: "Deletion failed" });
          }
        });
      }

      // 3️⃣ Teacher → ne peut supprimer que ses propres cours
      if (role === "teacher") {
        if (foundCourse.teacherId.toString() === userId) {
          return Course.deleteOne({ _id: courseId }).then((deleteResponse) => {
            if (deleteResponse.deletedCount === 1) {
              return res
                .status(200)
                .json({ message: "Course deleted successfully" });
            } else {
              return res.status(500).json({ message: "Deletion failed" });
            }
          });
        } else {
          return res.status(401).json({ message: "Unauthorized" });
        }
      }

      // 4️⃣ Autres rôles → Forbidden
      return res.status(403).json({ message: "Forbidden" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Server error", error: error.message });
    });
};

const addCourse = (req, res) => {
  let teacherId;
  if (req.user.role === "admin") {
    teacherId = req.body.teacherId;
    if (!teacherId) {
      return res.status(400).json({ message: "TeacherID required for admin" });
    }
  } else if (req.user.role === "teacher") {
    teacherId = req.user._id;
  } else {
    return res.status(403).json({ message: "Forbidden" });
  }

  const course = new Course({
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
    teacherId: teacherId,
  });
  course.save().then((savedCourse) => {
    return User.findByIdAndUpdate(teacherId, {
      $push: { courses: savedCourse._id },
    })
      .then(() => savedCourse)
      .then((savedCourse) => {
        res
          .status(201)
          .json({ message: "Course added successfully", course: savedCourse });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "Error adding course", error: error.message });
      });
  });
};

const updateCourse = (req, res) => {
  const courseId = req.params.id;

  Course.updateOne({ _id: courseId }, req.body)
    .then((updateRes) => {
      if (updateRes.matchedCount === 0) {
        return res.status(404).json({ message: "No course found" });
      }
      if (updateRes.modifiedCount === 0) {
        return res
          .status(200)
          .json({ message: "Course found but nothing was updated" });
      }

      res.status(200).json({ message: "Course updated successfully" });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error updating course", error: err.message });
    });
};

const getTeacherCourses = (req, res) => {
  const teacherId = req.user._id;
  Course.find({ teacherId: teacherId })
    .populate("teacherId", "firstName lastName")
    .populate("studentsIds", "firstName lastName")
    .then((foundCourses) => {
      console.log("Courses trouvées:", foundCourses);
      if (foundCourses.length > 0) {
        return res.status(200).json({ foundCourses });
      }
      return res.status(200).json({ message: "No course found" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Error server", error: err.message });
    });
};

const affectStudentToCourse = (req, res) => {
  const courseId = req.params.id;
  const studentId = req.body.student._id;

  if (!studentId) {
    return res.status(400).json({ message: "Student ID is required" });
  }

  // Vérifier que le cours existe
  Course.findById(courseId)
    .then((course) => {
      if (!course) {
        return res.status(404).json({ message: "No course found" });
      }

      // Vérifier que l'étudiant existe
      User.findById(studentId)
        .then((student) => {
          if (!student) {
            return res.status(404).json({ message: "No student found" });
          }

          // Ajouter l'étudiant au cours (évite les doublons)
          course
            .updateOne({ $addToSet: { studentsIds: studentId } })
            .then(() => {
              return res
                .status(200)
                .json({ message: "Student affected successfully" });
            })
            .catch((err) => {
              return res
                .status(500)
                .json({ message: "Error updating course", error: err.message });
            });
        })
        .catch((err) => {
          return res
            .status(500)
            .json({ message: "Error finding student", error: err.message });
        });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: "Error finding course", error: err.message });
    });
};

module.exports = {
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourseById,
  addCourse,
  getTeacherCourses,
  affectStudentToCourse,
};
