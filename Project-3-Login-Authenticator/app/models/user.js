const mongoose = require("mongoose");
const entrySchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})