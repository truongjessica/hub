const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema(
  {
    group_name: {
      type: String,
      maxlength: 20,
      minlength: 5,
    },
    nb_members: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Group", GroupSchema);
