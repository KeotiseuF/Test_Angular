const mongoose = require("mongoose");

const userIdSchema = mongoose.Schema({
    email: { type: String, required: true },
    password:  { type: String, required: true }
})

module.exports = mongoose.model("UserId", userIdSchema);