const {
  getAllCards,
  createCard,
  getSingleCard,
  updateCard,
  removeCard,
} = require("../controllers/cardController");
const { authenticateUser } = require("../middleware/authentication");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .post(authenticateUser, createCard)
  .get(authenticateUser, getAllCards);

router
  .route("/:id")
  .get(authenticateUser, getSingleCard)
  .patch(authenticateUser, updateCard)
  .delete(authenticateUser, removeCard);

module.exports = router;
