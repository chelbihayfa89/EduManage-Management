const teachersArr = require("../data/teacher.data.js");
const User = require("../models/user.model.js");

const getTeachers = (req, res) => {
  const speciality = req.query.speciality;

  if (speciality) {
    const filteredTeachers = teachersArr.filter(
      (t) => t.speciality === speciality,
    );

    return res.status(200).json({ teachers: filteredTeachers });
  }

  return res.status(200).json({ teachers: teachersArr });
};

const getAllTeachers = (req, res) => {
  User.find({ role: "teacher" })
    .then((foundUsers) => {
      if (foundUsers.length === 0) {
        return res.status(200).json({ message: "No found teachers" });
      } else {
        return res.status(200).json({ foundUsers });
      }
    })
    .catch((err) => res.status(500).json({ message: err.errors.message }));
};

module.exports = { getTeachers, getAllTeachers };
