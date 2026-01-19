const User = require("../models/user.model");

const getStudents = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  User.find({ role: "student" })
    .then((foundStudents) => {
      if (!foundStudents || foundStudents.length === 0) {
        return res.status(200).json({ message: "No student found" });
      }
      else {
        return res.status(200).json({students: foundStudents});
      }
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
};

module.exports = getStudents;
