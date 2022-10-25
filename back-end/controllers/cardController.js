const Card = require("../models/Flashcard");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Flashcard = require("../models/Flashcard");

const getAllCards = async (req, res) => {
  const {user} = req;
  if (!user) {
    throw new CustomError.BadRequestError("Please provide username");
  }
  const cards = await Flashcard.find({ user });
  console.log(cards);
  res.status(StatusCodes.OK).send("Get All Cards");
};

const createCard = async (req, res) => {
  const {title, question, answer, user} = req.body;
  const card = new Flashcard({title, question, answer, user});
  await card.save();
  res.status(StatusCodes.OK).send("Create card succeed");
};

const getSingleCard = async (req, res) => {
  const card = await Flashcard.findOne({ title: req.params.title })
  if (!card) {
    throw new CustomError.NotFoundError(`No card with title : ${req.params.title}`);
  }
  res.status(StatusCodes.OK).send("Get Single Card");

};

const updateCard = async (req, res) => {
  const { title, question, answer, user } = req.body;
  if (!title || !question || !answer ||!user) {
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
    throw new CustomError.NotFoundError(`No card with title : ${req.params.title}`);
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
