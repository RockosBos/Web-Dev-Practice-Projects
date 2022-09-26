const { serializeUser } = require("passport");
const Entry = require("../models/entry");

const surveyView = (req, res) => {

    res.render("survey", {});
}

const resultsView = (req, res) => {

    res.render("results", {});
}

const saveEntry = (req, res, next) => {
    
    const {entry1, entry2, entry3, entry4, entry5} = req.body;

    const newEntry = Entry({
        entry1,
        entry2,
        entry3,
        entry4,
        entry5
    });
    console.log(req.body);
    newEntry.save()
        .then(res.redirect("/"))
        .then(console.log("Data Updated Successfully"))
        .catch((err) => console.log(err));
    next();
    
};

const getEntry = (req, res, next) => {
    Entry.find({entry1: "Red"}, (err, docs) => {
        if(!err){
            console.log(docs);
            res.render("survey", {
                data: docs
            });
        }
        else{
            console.log("Failed to retrieve list");
        }
    })
}

module.exports = {
    surveyView,
    resultsView,
    saveEntry,
    getEntry
};
