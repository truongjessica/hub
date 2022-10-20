const Card = require("../models/Flashcard");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllCards = async (req, res) => {
  res.send("Get All Cards");
};

const createCard = async (req, res) => {
  res.send("Create card");
};

const getSingleCard = async (req, res) => {
  res.send("Get Single Card");
};

const updateCard = async (req, res) => {
  res.send("Update Card");
};

const removeCard = async (req, res) => {
  res.send("Remove card");
};

module.exports = {
  getAllCards,
  createCard,
  getSingleCard,
  updateCard,
  removeCard,
};
