var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var user = require("./models/user");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect();

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
    secret: "",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("server Has Started");
});