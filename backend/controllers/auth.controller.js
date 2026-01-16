const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/token");

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

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user);
        // Renvoyer les infos importantes sans le mot de passe
        // const userData = {
        //   _id: user._id,
        //   role: user.role,
        //   firstName: user.firstName,
        //   lastName: user.lastName,
        //   email: user.email,
        //   phone: user.phone,
        //   address: user.address,
        //   speciality: user.speciality,
        //   photo: user.photo,
        //   teacherCv: user.teacherCv,
        //   validated: user.validated,
        //   childPhone: user.childPhone,
        // };

        return res
          .status(200)
          .json({ message: "Login successful", token: token });
      });
    })
    .catch((err) => {
      return res
        .status(500)
        .json({ message: "Server error", error: err.message });
    });
};

module.exports = { register, login };
