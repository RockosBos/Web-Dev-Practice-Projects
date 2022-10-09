const mongoose = require("mongoose");
const entrySchema = new mongoose.Schema({
    entry1: {
        type: String,
        required: false
    },
    entry2: {
        type: String,
        required: false
    },
    entry3: {
        type: String,
        required: false
    },
    entry4: {
        type: String,
        required: false
    },
    entry5: {
        type: String,
        required: false
    },

});
const Entry = mongoose.model("entry", entrySchema);
module.exports = Entry;