const { mongo, default: mongoose } = require("mongoose");
const Entry = require("../models/entry");

const surveyView = (req, res) => {

    res.render("survey", {});
}

const resultsView = async (req, res, next) => {

    Entry.find((err, docs) => {
        
        res.render("results", {document: docs});
    });
    
}

const saveEntry = (req, res, next) => {
    
    
    const entry1 = req.body.q1Res;
    const entry2 = req.body.q2Res;
    const entry3 = req.body.q3Res;
    const entry4 = req.body.q4Res;
    const entry5 = req.body.q5Res;

    const newEntry = new Entry({
        entry1,
        entry2,
        entry3,
        entry4,
        entry5
    });
    console.log(newEntry);
    newEntry.save()
        .then(res.redirect("results"))
        .then(console.log("Data Updated Successfully"))
        .catch((err) => console.log(err));
    next();
    
};

module.exports = {
    surveyView,
    resultsView,
    saveEntry
};
