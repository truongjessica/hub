const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllUsers = async (req, res) => {
  res.send("Get All Users");
};

const getSingleUser = async (req, res) => {
  res.send("Get single user");
};

const showCurrentUser = async (req, res) => {
  res.send("Get current user");
};
// update user with user.save()
const updateUser = async (req, res) => {
  res.send("Update user");
};

module.exports = {
  getAllUsers,
  getSingleUser,
  showCurrentUser,
  updateUser,
};
