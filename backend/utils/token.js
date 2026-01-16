const jwt = require("jsonwebtoken");

// Fonction pour créer un Token

const SECRET_KEY = "MonSuperSecretPourEcole2026!";
const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    SECRET_KEY,
    { expiresIn: "3h" }
  );
};

module.exports = generateToken;
