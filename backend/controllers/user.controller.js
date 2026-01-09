const usersArr = require("../data/user.data");
const User = require("../models/user.model");

const getUsers = (req, res) => {
  res.status(200).json({ users: usersArr });
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = usersArr.find((u) => u.id == Number(userId));
  if (!user) {
    return res.status(404).json({ message: "No user found" });
  }
  res.status(200).json({ user: user });
};

module.exports = { getUsers, getUserById };
