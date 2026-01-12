const coursesArr = require("../data/course.data");
const Course = require("../models/course.model");

const getCourses = (req, res) => {
  Course.find()
    .then((courses) => {
      res.status(200).json({ courses });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const getCourseById = (req, res) => {
  Course.findById(req.params.id) // recherche par _id
    .then((course) => {
      if (course) {
        return res.status(200).json({ course });
      } else {
        return res.status(404).json({ message: "No course found" });
      }
    })
    .catch((error) => {
      res.status(404).json({ message: error.message });
    });
};

const deleteCourseById = (req, res) => {
  Course.deleteOne({ _id: req.params.id })
    .then((deleteResponse) => {
      if (deleteResponse.deletedCount === 1) {
        res.status(200).json({ message: "Course deleted successfully" });
      } else {
        return res.status(404).json({ message: "No course found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
};

const addCourse = (req, res) => {
  console.log("Body reçu :", req.body);
  const course = new Course({
    name: req.body.name,
    description: req.body.description,
    duration: req.body.duration,
  });
  course
    .save()
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

module.exports = {
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourseById,
  addCourse,
};
