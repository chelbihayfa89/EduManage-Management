const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/token");

const register = (req, res) => {
  // 1️⃣ Vérifier si l'email existe
  User.findOne({ email: req.body.email })
    .then((existingUser) => {
      if (existingUser) {
        // Email déjà utilisé → renvoyer et arrêter
        res.status(409).json({ message: "User already exists with this email" });
        return null; // Stopper la chaîne
      }

      // 2️⃣ Si parent, chercher l'enfant
      if (req.body.role === "parent") {
        return User.findOne({ role: "student", phone: req.body.childPhone });
      }

      return null; // Pas parent
    })
    .then((child) => {
      // Si la réponse précédente a déjà été envoyée, on stop
      if (child === null && req.body.role !== "parent") return;

      // 3️⃣ Si parent et pas d'enfant trouvé
      if (req.body.role === "parent" && !child) {
        res.status(400).json({ message: "No student found with this phone number" });
        return;
      }

      // 4️⃣ Hasher le mot de passe
      return bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
        const userData = { ...req.body, password: hashedPassword };
        if (child) userData.childId = child._id;

        // 5️⃣ Créer et sauvegarder l'utilisateur
        return new User(userData).save();
      });
    })
    .then((savedUser) => {
      if (!savedUser) return; // Si réponse déjà envoyée, stop
      res.status(201).json({ message: "User added with success", user: savedUser });
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
