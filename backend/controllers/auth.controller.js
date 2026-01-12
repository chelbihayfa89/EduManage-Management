const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const register = (req, res) => {
  User.findOne({ email: req.body.email }).then((existingUser) => {
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists with this email" });
    }

    bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
      req.body.password = hashedPassword;
      const user = new User(req.body);
      console.log(hashedPassword);
      user
        .save()
        .then((doc) => {
          res.status(201).json({
            message: "User added with success",
            user: doc,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error while adding user",
            error: err.message,
          });
        });
    });
  });
};

const login = (req, res) => {
  const { phone, password } = req.body;

  User.findOne({ phone })
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "Invalid credentials" });
      }

      // On retourne une promesse avec user pour le prochain then
      return bcrypt
        .compare(password, user.password)
        .then((isMatch) => ({ isMatch, user })) // ✅ syntaxe correcte
        .catch((err) => {
          // attrape bcrypt.compare pour éviter ERR_HTTP_HEADERS_SENT
          return Promise.reject(err);
        });
    })
    .then(({ isMatch, user }) => {
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      return res.status(200).json({ message: "Login successful", user });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "Server error",
        error: err.message,
      });
    });
};

module.exports = { register, login };
