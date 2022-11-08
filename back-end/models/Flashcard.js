const mongoose = require("mongoose");

const FlashcardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 3,
      required: true,
    },
    question: {
      type: String,
      minlength: 5,
      required: true,
    },
    answer: {
      type: String,
      minlength: 5,
    },
    group: {
      type: mongoose.Types.ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Flashcard", FlashcardSchema);
