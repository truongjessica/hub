const CustomError = require("../errors");
const Group = require("../models/Group");
const User = require("../models/User");
const groupCheckVerification = async (req, res, next) => {
  const { userId } = req.user;
  const { id } = req.params;
  const group = await Group.findOne({ _id: id });
  if (!group) {
    throw new CustomError.NotFoundError(`Can't find a group with name ${id}`);
  }
  const user = await User.findOne({ _id: userId, groups: { $in: group._id } });
  if (!user) {
    throw new CustomError.UnauthorizedError(`Not authorized to access`);
  }
  adminVerify = user._id.equals(group.admin);
  req.admin = adminVerify;
  next();
};
module.exports = groupCheckVerification;
