const mongoose = require("mongoose");
const randomstring = require("randomstring");
const GroupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 20,
      minlength: 5,
      unique: true,
    },
    nb_members: {
      type: Number,
      default: 1,
    },
    section: {
      type: String,
      required: true,
    },
    admin: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    professor: {
      type: String,
      required: true,
    },
    code: {
      type: String,
    },
  },
  { timestamps: true }
);
GroupSchema.pre("save", function () {
  this.code = randomstring.generate(process.env.RANDOM_NUMB);
});
module.exports = mongoose.model("Group", GroupSchema);
