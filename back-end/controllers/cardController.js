const Card = require("../models/Flashcard");
const Group = require("../models/Group");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllCards = async (req, res) => {
  const { user } = req;
  // Use this to check for the user in the card
  const cards = await Card.find({ user: user.userId });
  res.status(StatusCodes.OK).json({ cards });
};

const createCard = async (req, res) => {
  const { title, question, answer } = req.body;
  const { userId } = req.user;
  const group = await Group.find({ user: userId });

  const newCard = { title, question, answer, group: group._id };
  const card = await Card.create(newCard);
  res.status(StatusCodes.CREATED).json({ card });
};

const getSingleCard = async (req, res) => {
  const card = await Flashcard.findOne({ title: req.params.title });
  if (!card) {
    throw new CustomError.NotFoundError(
      `No card with title : ${req.params.title}`
    );
  }
  res.status(StatusCodes.OK).send("Get Single Card");
};

const updateCard = async (req, res) => {
  const { title, question, answer, user } = req.body;
  if (!title || !question || !answer || !user) {
    throw new CustomError.BadRequestError("Please provide all values");
  }
  const card = await Flashcard.findOne({ title: req.params.title });

  card.title = title;
  card.question = question;
  card.answer = answer;

  await card.save();
  res.status(StatusCodes.OK).send("Update Card");
};

const removeCard = async (req, res) => {
  const title = await Flashcard.deleteOne({ title: req.params.title });
  if (!title) {
    throw new CustomError.NotFoundError(
      `No card with title : ${req.params.title}`
    );
  }
  res.status(StatusCodes.OK).send("Remove card");
};

module.exports = {
  getAllCards,
  createCard,
  getSingleCard,
  updateCard,
  removeCard,
};
