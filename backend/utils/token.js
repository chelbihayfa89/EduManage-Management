const jwt = require("jsonwebtoken");

// Fonction pour créer un Token


const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    process.env.SECRET_KEY,
    { expiresIn: "3h" }
  );
};

module.exports = generateToken;
