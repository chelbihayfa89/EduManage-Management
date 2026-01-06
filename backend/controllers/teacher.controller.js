const teachersArr = require("../data/teacher.data.js");

const searchTeacherBySpeciality = (req, res) => {
  const speciality = req.params.speciality;
  const filteredTeachers = teachersArr.filter(
    (t) => t.speciality === speciality
  );
  if (filteredTeachers.length === 0) {
    return res.status(404).json({ message: "No teacher found" });
  }
  res.status(200).json({ teachers: filteredTeachers });
};

module.exports = { searchTeacherBySpeciality };
