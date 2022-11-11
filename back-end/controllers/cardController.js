const Card = require("../models/Flashcard");
const Group = require("../models/Group");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");

const getAllCards = async (req, res) => {
  const { userId } = req.user;
  let { group_name } = req.body;
  let cards;
  let user;
  if (group_name !== "") {
    const group = await Group.findOne({ name: group_name });
    if (!group) {
      throw new CustomError.BadRequestError(`Group does not exist `);
    }
    user = await User.findOne({
      _id: userId,
      groups: { $in: group._id },
    });
    if (!user) {
      throw new CustomError.UnauthorizedError(
        `User is not authorized to access this card `
      );
    }
    cards = await Card.find({ group: group._id });
  } else {
    user = await User.findOne({ _id: userId });
    cards = await Card.find({ group: { $in: user.groups } });
  }

  res.status(StatusCodes.OK).json({ cards, nb: cards.length });
};

const createCard = async (req, res) => {
  const { group_name, title, question, answer } = req.body;
  const { userId } = req.user;
  const group = await Group.findOne({ user: userId, name: group_name });
  if (!group) {
    throw new CustomError.BadRequestError(`Group does not exist `);
  }
  const newCard = { title, question, answer, group: group._id };
  const card = await Card.create(newCard);
  res.status(StatusCodes.CREATED).json({ card });
};
const getSingleCard = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  const card = await Card.findById({ _id: id });
  const user = await User.findOne({
    _id: userId,
    groups: { $in: card.group },
  });
  if (!user) {
    throw new CustomError.UnauthorizedError(`Can't access this card`);
  }
  res.status(StatusCodes.OK).json({ card });
};

const updateCard = async (req, res) => {
  const { userId } = req.user;
  const { id } = req.params;
  const card = await Card.findById({ _id: id });
  const user = await User.findOne({
    _id: userId,
    groups: { $in: card.group },
  });
  if (!user) {
    throw new CustomError.UnauthorizedError(`Can't access this card`);
  }
  await Card.findByIdAndUpdate({ _id: id }, req.body);
  res.status(StatusCodes.OK).json({ msg: "Update done" });
};

const removeCard = async (req, res) => {
  const { id } = req.params;
  const card = await Card.findByIdAndDelete({ _id: id });
  if (!card) {
    throw new CustomError.NotFoundError(`Can't find a card with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ msg: `Card delete successfully` });
};

module.exports = {
  getAllCards,
  createCard,
  getSingleCard,
  updateCard,
  removeCard,
};
