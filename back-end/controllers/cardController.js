const Card = require("../models/Flashcard");
const Group = require("../models/Group");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");

const getAllCards = async (req, res) => {
  const { user } = req;
  // Use this to check for the user in the card
  const cards = await Card.find({ user: user.userId });
  res.status(StatusCodes.OK).json({ cards });
};

const createCard = async (req, res) => {
  const { group_name, title, question, answer } = req.body;
  const { userId } = req.user;
  const group = await Group.find({ user: userId, name: group_name });
  if (!group) {
    throw new CustomError.BadRequestError(`Group does not exist `);
  }
  const newCard = { title, question, answer, group: group._id };
  const card = await Card.create(newCard);
  res.status(StatusCodes.CREATED).json({ card });
};

const getSingleCard = async (req, res) => {
  const card = await Card.findOne({ title: req.params.title });
  if (!card) {
    throw new CustomError.NotFoundError(
      `No card with title : ${req.params.title}`
    );
  }
  res.status(StatusCodes.OK).send("Get Single Card");
};

const updateCard = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  const card = await Card.findById({ _id: id });
  const user = await User.findById({
    _id: userId,
    groups: { $in: card.group._id },
  });
  if (!user) {
    throw new CustomError.UnauthorizedError(`Can't modified this card`);
  }
  res.status(StatusCodes.OK).json({ msg: "update done" });
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
