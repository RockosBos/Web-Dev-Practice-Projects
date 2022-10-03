const { mongo, default: mongoose } = require("mongoose");
const Entry = require("../models/entry");

const surveyView = (req, res) => {

    res.render("survey", {});
}

const resultsView = (req, res) => {

    res.render("results", {});
}

const saveEntry = (req, res, next) => {
    
    
    const entry1 = req.body.q1Res;
    const entry2 = req.body.q2Res;
    const entry3 = req.body.q3Res;
    const entry4 = req.body.q4Res;
    const entry5 = req.body.q5Res;

    console.log(req.body);
    console.log(entry1 + " " + entry2 + " " + entry3 + " " + entry4 + " " + entry5);

    const newEntry = new Entry({
        entry1,
        entry2,
        entry3,
        entry4,
        entry5
    });
    console.log(newEntry);
    newEntry.save()
        .then(res.redirect("/"))
        .then(console.log("Data Updated Successfully"))
        .catch((err) => console.log(err));
    next();
    
};

const getEntry = (req, res, next) => {
    
    Entry.find((err, docs) => {
        if(!err){
            docs.map(item => {
                res.render(item.entry1 + " " + item.entry2 + " " + item.entry3 + " " + item.entry4 + " " + item.entry5);
            })
            
        }
    });

    res.redirect('/');
    //next();
}

module.exports = {
    surveyView,
    resultsView,
    saveEntry,
    getEntry
};
