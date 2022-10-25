const Group = require("../models/Group");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllGroups = async (req, res) => {
  res.send("Get All Groups");
};

const createGroup = async (req, res) => {
  res.send("Create Group");
};

const getSingleGroup = async (req, res) => {
  res.send("Get Single Group");
};

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
