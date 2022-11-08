const Group = require("../models/Group");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");
const mongoose = require("mongoose");
const getAllGroups = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findOne({ _id: userId });
  const groups = await Group.find({ _id: { $in: user.groups } });
  res.status(StatusCodes.OK).json({ groups });
};

const createGroup = async (req, res) => {
  const {
    user: { userId },
  } = req;
  const group = await Group.create({ ...req.body, admin: userId });
  await User.findByIdAndUpdate(
    { _id: userId },
    { $addToSet: { groups: [group._id] }, groupVerification: true }
  );
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "Group create successfully", group });
};

const getSingleGroup = async (req, res) => {
  const { id } = req.params;
  const group = await Group.findOne({ _id: id });
  if (!group) {
    throw new CustomError.NotFoundError(`Can't find a group with name ${id}`);
  }
  res.status(StatusCodes.OK).json({ group });
};

const updateGroup = async (req, res) => {
  if (!req.admin) {
    throw new CustomError.UnauthorizedError("Only admin can modify group");
  }
  const { id } = req.params;
  const group = await Group.findOne({ _id: id });
  if (!group) {
    throw new CustomError.NotFoundError(`Can't find a group with name ${id}`);
  }
  const { name, section, professor } = req.body;
  await Group.findByIdAndUpdate({ _id: id }, { name, section, professor });
  res.status(StatusCodes.OK).json({ msg: "Successfully update group" });
};
const removeGroup = async (req, res) => {
  const { id } = req.params;
  if (!req.admin) {
    throw new CustomError.UnauthorizedError("Only admin can delete group");
  }
  const group = await Group.findOne({ _id: id });
  if (!group) {
    throw new CustomError.NotFoundError(`Can't find a group with name ${id}`);
  }
  // Delete the group
  await Group.deleteOne({ _id: id });
  // Delete any reference in the user array
  await User.updateMany({ $pull: { groups: id } });
  res.status(StatusCodes.OK).json({ msg: "Group delete successfully" });
};
const getMemberInGroup = async (req, res) => {
  const { id } = req.params;
  let groupId = mongoose.Types.ObjectId(id);
  const group = await Group.findOne({ _id: id });
  if (!group) {
    throw new CustomError.NotFoundError(`Can't find a group with name ${id}`);
  }
  const users = await User.aggregate([
    { $unwind: "$groups" },
    {
      $match: {
        groups: groupId,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ users });
};
const userJoinGroup = async (req, res) => {
  const { userId } = req.user;
  const { code } = req.body;
  const group = await Group.findOne({ code });
  // check if user already in the group or not
  const user = await User.findOne({ _id: userId, groups: { $in: group._id } });
  if (user) {
    throw new CustomError.BadRequestError(`User already in the group`);
  }
  if (!group) {
    throw new CustomError.NotFoundError(`Can't find the group`);
  }
  await User.findByIdAndUpdate(
    { _id: userId },
    { $addToSet: { groups: [group._id] }, groupVerification: true }
  );
  res.status(StatusCodes.OK).json({ mgs: "Successfully join the group" });
};

module.exports = {
  getAllGroups,
  createGroup,
  getSingleGroup,
  updateGroup,
  removeGroup,
  getMemberInGroup,
  userJoinGroup,
};
