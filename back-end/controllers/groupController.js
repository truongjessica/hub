const Group = require("../models/Group");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");

const getAllGroups = async (req, res) => {
  res.send("Get All Groups");
};

const createGroup = async (req, res) => {
  const {
    user: { userId },
  } = req;
  const group = await Group.create({ ...req.body, user: userId });
  await User.findByIdAndUpdate(
    { _id: userId },
    { $addToSet: { groups: [group._id] } }
  );
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Group create successfully", group });
};

const getSingleGroup = async (req, res) => {};

const updateGroup = async (req, res) => {
  res.send("Update Group");
};

const removeGroup = async (req, res) => {
  res.send("Remove Group");
};

module.exports = {
  getAllGroups,
  createGroup,
  getSingleGroup,
  updateGroup,
  removeGroup,
};
