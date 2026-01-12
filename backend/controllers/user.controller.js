const usersArr = require("../data/user.data");
const User = require("../models/user.model");

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
  User.findById({ _id: req.params.id })
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
  User.deleteOne({ _id: userId })
    .then((deleteResponse) => {
      if (deleteResponse.deleteCount == 1) {
        res.status(200).json({ message: "User deleted successfully" });
      } else {
        return res.status(404).json({ message: "No user found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};

module.exports = { getUsers, getUserById, validateUser, deleteUserById };
