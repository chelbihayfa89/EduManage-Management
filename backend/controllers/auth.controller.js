const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/token");
const path = require("path");

const register = (req, res) => {
  if (req.body.role === "student" && req.file) {
    req.body.photo = `/uploads/students/${req.file.filename}`;
  }
  else {
    req.body.photo = 'assets/template/img/avatar.png';
  }
  if (req.body.role === "teacher" && req.file) {
    req.body.teacherCv = `/uploads/students/${req.file.filename}`;
  }

  User.findOne({ email: req.body.email })
    .then((existingUser) => {
      if (existingUser) {
        res
          .status(409)
          .json({ message: "User already exists with this email" });
        return null;
      }

      if (req.body.role === "parent") {
        return User.findOne({ role: "student", phone: req.body.childPhone });
      }

      // Pour student ou teacher, juste continuer
      return "noChildNeeded"; // marque qu'on continue
    })
    .then((child) => {
      // Si parent mais enfant non trouvé
      if (req.body.role === "parent") {
        if (!child) {
          res
            .status(400)
            .json({ message: "No student found with this phone number" });
          return null;
        }
      }

      // Hash du mot de passe et création de l'utilisateur
      if (child !== null) {
        return bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
          const userData = { ...req.body, password: hashedPassword };
          if (child && child !== "noChildNeeded") userData.childId = child._id;

          return new User(userData).save();
        });
      }
    })
    .then((savedUser) => {
      if (!savedUser) return;
      res
        .status(201)
        .json({ message: "User added with success", user: savedUser });
    })
    .catch((err) => {
      res.status(500).json({ message: "Server error", error: err.message });
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
