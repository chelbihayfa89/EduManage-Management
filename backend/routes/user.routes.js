const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const authorize = require("../middleware/authorize");

const {
  getUsers,
  getUserById,
  validateUser,
  deleteUserById,
  getProfile,
} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/profile", authMiddleware, getProfile);
router.get("/:id", authMiddleware, authorize("admin"), getUserById);
router.patch("/:id/validate", authMiddleware, authorize("admin"), validateUser);
router.delete("/:id", authMiddleware, authorize("admin"), deleteUserById);

module.exports = router;
