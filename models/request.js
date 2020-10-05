const mongoose = require("mongoose");
const Schema = mongoose.Schema

const RequestSchema = new Schema(
    {
        username: { type: String, required: true },
        title: { type: String, required: true },
        message: { type: String }
    },
    { timestamps: true }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;