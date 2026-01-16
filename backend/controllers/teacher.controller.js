const teachersArr = require("../data/teacher.data.js");
const User = require("../models/user.model.js");

const getTeachers = (req, res) => {
  const speciality = req.query.speciality;

  if (speciality) {
    const filteredTeachers = teachersArr.filter(
      (t) => t.speciality === speciality
    );

    return res.status(200).json({ teachers: filteredTeachers });
  }

  return res.status(200).json({ teachers: teachersArr });
};


module.exports = { getTeachers};
