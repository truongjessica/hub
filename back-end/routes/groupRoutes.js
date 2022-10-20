const {
  getAllGroups,
  createGroup,
  getSingleGroup,
  updateGroup,
  removeGroup,
} = require("../controllers/groupController.js");

const { authenticateUser } = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createGroup)
  .get(authenticateUser, getAllGroups);

router
  .route("/:id")
  .get(authenticateUser, getSingleGroup)
  .patch(authenticateUser, updateGroup)
  .delete(authenticateUser, removeGroup);

module.exports = router;
