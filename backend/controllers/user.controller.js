const User = require("../models/user.model");
const Note = require("../models/note.model");
const Course = require("../models/course.model");


const getUsers = (req, res) => {
  User.find()
    .then((users) => {
      return res.status(200).json({ users });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};

const getUserById = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "unauthorized" });
  }
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }
      return res.status(200).json({ user });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};

const validateUser = (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "unauthorized" });
  }
  const userId = req.params.id;
  User.findByIdAndUpdate(userId, { validated: true })
    .then(() => {
      res.status(200).json({ message: "user validated" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};

const deleteUserById = (req, res) => {
  const userId = req.params.id;

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "No user found with this ID" });
      }

      // STUDENT
      if (user.role === "student") {
        return Note.deleteMany({ studentId: user._id })
          .then(() =>
            Course.updateMany(
              { studentsIds: user._id },
              { $pull: { studentsIds: user._id } },
            ),
          )
          .then(() => User.deleteOne({ _id: user._id }))
          .then((deleteResponse) => {
            if (deleteResponse.deletedCount === 1) {
              return res
                .status(200)
                .json({ message: "Student deleted successfully" });
            } else {
              return res.status(400).json({ message: "User not deleted" });
            }
          });
      }

      // TEACHER
      else if (user.role === "teacher") {
        return Course.deleteMany({ teacherId: user._id })
          .then(() => User.deleteOne({ _id: user._id }))
          .then((deleteResponse) => {
            if (deleteResponse.deletedCount === 1) {
              return res
                .status(200)
                .json({ message: "Teacher deleted successfully" });
            } else {
              return res.status(400).json({ message: "User not deleted" });
            }
          });
      }

      // PARENT
      else {
        return User.deleteOne({ _id: user._id }).then((deleteResponse) => {
          if (deleteResponse.deletedCount === 1) {
            return res
              .status(200)
              .json({ message: "User deleted successfully" });
          } else {
            return res.status(400).json({ message: "User not deleted" });
          }
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({ error: error.message });
    });
};

const getProfile = (req, res) => {
  const userId = req.user._id;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "No user found" });
      }
      return res.status(200).json({ user }); // 200 = OK
    })
    .catch((err) => {
      return res.status(500).json({ err: err.message });
    });
};

module.exports = {
  getUsers,
  getUserById,
  validateUser,
  deleteUserById,
  getProfile,
};
