const mongoose = require("mongoose");

const ForumSchema = mongoose.Schema(
    {
        title: {
            type: String,
            minlength: 3,
            required: true,
        },
        post: {
            type: String,
            minlength: 5,
            required: true,
        },
        createdAt: {
            type: Date,
            default: () => Date.now(),
        },
        updatedAt:{
            type: Date,
            default: () => Date.now(),
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
          },
        },
);

module.exports = mongoose.model("Flashcard", FlashcardSchema);