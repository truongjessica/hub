const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  content: {
    type: String,
    minlength: 5,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Post", PostSchema);
