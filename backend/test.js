const bcrypt = require('bcrypt');

const password = "admin123"; // le mot de passe que tu veux pour l'admin
const salt = 10;

bcrypt.hash(password, salt).then(hash => {
  console.log("Hash à mettre dans Compass :", hash);
});
