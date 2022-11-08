const {
  getAllGroups,
  createGroup,
  getSingleGroup,
  updateGroup,
  removeGroup,
  getMemberInGroup,
  userJoinGroup,
} = require("../controllers/groupController.js");

const { authenticateUser } = require("../middleware/authentication");
const groupCheckVerification = require("../middleware/groupAuthentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createGroup)
  .get(authenticateUser, getAllGroups);
router.get("/joins", authenticateUser, userJoinGroup);
router.get(
  "/getUsers/:id",
  authenticateUser,
  groupCheckVerification,
  getMemberInGroup
);

router
  .route("/:id")
  .get(authenticateUser, groupCheckVerification, getSingleGroup)
  .patch(authenticateUser, groupCheckVerification, updateGroup)
  .delete(authenticateUser, groupCheckVerification, removeGroup);

module.exports = router;
