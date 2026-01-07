const users = require("../data/user.data");

const register = (req, res) => {
  const emailExists = users.find((u) => u.email === req.body.email);
  if (emailExists) {
    return res.status(400).json({ message: "Email already in use" });
  }
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  return res
    .status(201)
    .json({ message: "user added successfully", user: newUser });
};

const login = (req, res) => {
  const { phone, password } = req.body;
  console.log("REQ BODY =", req.body);

  const user = users.find((u) => u.phone === phone && u.password === password);

  if (!user) {
    return res
      .status(404)
      .json({ message: "No user found with these credentials" });
  }

  return res.status(200).json({ message: "Welcome", user: user });
};
module.exports = { register, login };
