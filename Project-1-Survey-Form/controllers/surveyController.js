const { serializeUser } = require("passport");
const Entry = require("../models/entry");

const surveyView = (req, res) => {
    res.render("survey", {});
}

const resultsView = (req, res) => {
    res.render("results", {});
}

const saveEntry = (req, res) => {
    
    const {id, entry1, entry2, entry3, entry4, entry5} = req.body;
    console.log(req.body);
    res.send(req.body);
    next();
};

module.exports = {
    surveyView,
    resultsView,
    saveEntry,
};
