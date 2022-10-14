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
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true,
          },
        },
);

module.exports = mongoose.model("Flashcard", FlashcardSchema);