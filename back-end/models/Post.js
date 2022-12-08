const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 3,
      required: true,
    },
    content: {
      type: String,
      minlength: 5,
      required: true,
    },
    group: {
      type: mongoose.Types.ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
