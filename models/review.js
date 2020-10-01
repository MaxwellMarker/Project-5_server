const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ReviewSchema = new Schema(
    {
        username: { type: String, required: true },
        title: { type: String, required: true },
        content: { type: String, required: true },
        rating: { type: Number, required: true, max: 10, min: 0},
        gameId: { type: String, required: true }
    },
    { timestamps: true }
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;