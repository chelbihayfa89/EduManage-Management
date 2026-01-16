const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");

const {
  getUsers,
  getUserById,
  validateUser,
  deleteUserById,
  getProfile,
} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/profile", authMiddleware, getProfile);
router.get("/:id", getUserById);
router.patch("/:id/validate", validateUser);
router.delete("/:id", deleteUserById);


module.exports = router;
