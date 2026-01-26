const User = require("../models/user.model.js");

const getTeachersBySpeciality = (req, res) => {
  const speciality = req.query.speciality;

  User.find({ role: "teacher", speciality: speciality }).then(
    (foundTeachers) => {
      if (foundTeachers.length === 0) {
        return res.status(200).json({ message: "No found teachers" });
      } else {
        return res.status(200).json({ teachers: foundTeachers });
      }
    },
  );
};

const getAllTeachers = (req, res) => {
  User.find({ role: "teacher" })
    .then((foundTeachers) => {
      if (foundTeachers.length === 0) {
        return res.status(200).json({ message: "No found teachers" });
      } else {
        return res.status(200).json({ teachers: foundTeachers });
      }
    })
    .catch((err) => res.status(500).json({ message: err.errors.message }));
};

module.exports = { getTeachersBySpeciality, getAllTeachers };
