const {mongo, default: mongoose} = require("mongoose");
const User = require("../models/user");

const register = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    username.register(new username({username: username}), password, 
        (err, user) => {
            if(err){
                console.log("An error has occurred: " + err);
                return res.render("register");
            }
            passport.authenticate("local")(
                req, res, () =>{
                    res.render("secret");
                }
            );
    });
};

const login = (passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"}),
    (req, res) => {
        res.render("login");
});



module.exports = {register, login};