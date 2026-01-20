const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {
  // Lire le token dans les headers Authorization
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Access denial, no token" });
  }
  // authHeader.split(' ') => ['Bearer', '<TOKEN_JWT>']
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    console.log(req.user);
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalide" });
  }
};

module.exports = authMiddleware;
