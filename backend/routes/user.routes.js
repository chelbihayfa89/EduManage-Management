const express = require("express");
const router = express.Router();

const { getUsers, getUserById, validateUser, deleteUserById} = require("../controllers/user.controller");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.patch("/:id/validate", validateUser)
router.delete("/:id", deleteUserById)

module.exports = router;
