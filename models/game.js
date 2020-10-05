const mongoose = require("mongoose");
const Schema = mongoose.Schema

const GameSchema = new Schema(
    {
        name: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        description: { type: String, required: true },
        img: { type: String},
        platforms: {type: Array},
        genres: {type: Array},
        publishers: {type: Array},
        developers: {type: Array},
        rating: {type: Number, default: 0}
    },
    { timestamps: true }
);

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;