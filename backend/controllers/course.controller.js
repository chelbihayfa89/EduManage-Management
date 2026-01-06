const coursesArr = require("../data/course.data");

const getCourses = (req, res) => {
  res.status(200).json({ courses: coursesArr });
};

const getCourseById = (req, res) => {
  const id = Number(req.params.id);
  const course = coursesArr.find((c) => c.id === id);
  if (!course) {
    return res.status(404).json({ message: "No course found" });
  }
  console.table(course);
  res.status(200).json({ course: course });
};

const deleteCourseById = (req, res) => {
  const id = Number(req.params.id);
  const index = coursesArr.findIndex((c) => c.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "No course found" });
  }
  coursesArr.splice(index, 1);
  res.status(200).json({ message: "Course deleted successfully" });
};

const addCourse = (req, res) => {
  const newCourse = { id: coursesArr.length + 1, ...req.body }; // génère un id si absent
  coursesArr.push(newCourse);
  res
    .status(201)
    .json({ message: "Course added successfully", course: newCourse });
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
