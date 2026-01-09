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
  const updatedData = req.body;
  const id = Number(req.params.id);
  const index = coursesArr.findIndex((c) => c.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ message: "No course found" });
  }
  if (!updatedData.name || !updatedData.description || !updatedData.duration) {
    return res.status(400).json({ message: "Invalid Data" });
  }
  // fusion partielle
  coursesArr[index] = { ...coursesArr[index], ...updatedData };
  res.status(200).json({
    message: "Course updated successfully",
    course: coursesArr[index],
  });
};

module.exports = {
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourseById,
  addCourse,
};
