const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
} = require("../controllers/userController");
router.route("/").get(getAllUsers);
router.route("/singleUser").get(showCurrentUser);
router.route("/:id").get(getSingleUser).patch(updateUser);

module.exports = router;
