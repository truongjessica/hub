const {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  removePost,
} = require("../controllers/postController");
const { authenticateUser } = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createPost)
  .get(authenticateUser, getAllPosts);

router
  .route("/:id")
  .get(authenticateUser, getSinglePost)
  .patch(authenticateUser, updatePost)
  .delete(authenticateUser, removePost);

module.exports = router;
