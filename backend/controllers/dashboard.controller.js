const getDashboard = (req, res) => {
  const role = req.user.role;
  if (role === "admin") {
    res.json({
      message: "Bienvenue sur le dashboard admin",
    });
  } else if (role === "teacher") {
    const teacher = req.user;
    res.json({
      message: "Bienvenue sur le dashboard teacher", teacher
    });
  } else if (role === "student") {
    res.json({
      message: "Bienvenue sur le dashboard student",
    });
  } else if (role === "parent") {
    res.json({
      message: "Bienvenue sur le dashboard parent",
    });
  } else {
    res.status(403).json({ message: "Accès refusé" });
  }
};

module.exports = {getDashboard};
