const Schoolclass = require("../models/school-class.model");

const addSchoolClass = (req, res) => {
  const { name, level } = req.body;
  if (!name || !level) {
    return res.status(400).json({ message: "Name and level are required" });
  }
  const schoolClass = new Schoolclass({
    name: name,
    level: level,
  });

  schoolClass
    .save()
    .then(() => {
      return res
        .status(201)
        .json({ message: "School class added successfully" });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error adding school class", error: error.message });
    });
};

const getSchoolClasses = (req, res) => {
  Schoolclass.find()
    .then((schoolClasses) => {
      if (!schoolClasses || schoolClasses.length === 0) {
        return res.status(404).json({ message: "No school classes found" });
      }
      return res.status(200).json({ schoolClasses });
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Error fetching school class", error: error.message });
    });
};

module.exports = { addSchoolClass, getSchoolClasses };
