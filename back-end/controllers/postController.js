const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

const getAllPosts = async (req, res) => {
  res.send("Get All Posts");
};

const createPost = async (req, res) => {
  res.send("Create Post");
};

const getSinglePost = async (req, res) => {
  res.send("Get Single Post");
};

const updatePost = async (req, res) => {
  res.send("Update Post");
};

const removePost = async (req, res) => {
  res.send("Remove Post");
};
module.exports = {
  getAllPosts,
  createPost,
  getSinglePost,
  updatePost,
  removePost,
};
