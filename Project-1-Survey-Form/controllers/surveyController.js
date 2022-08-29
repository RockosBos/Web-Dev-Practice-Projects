const Entry = require("../models/entry");
const bcrypt = require("bcryptjs");

const surveyView = (req, res) => {
    res.render("survey", {});
}

const resultsView = (req, res) => {
    res.render("results", {});
}

const createEntry = (req, res) => {
    const {id, entry1, entry2, entry3, entry4, entry5} = req.body;
    if(!entry1 && !entry2 && !entry3 && !entry4 && !entry5){
        alert("Please answer at least one question");
    }
    else{
        
    }
}

module.exports = {
    surveyView,
    resultsView
}
