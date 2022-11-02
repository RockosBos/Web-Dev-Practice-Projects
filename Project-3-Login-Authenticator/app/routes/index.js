const passport = require("passport");
const {register, login} = require("../app/controllers/loginController");

var app = express();

app.get('/', (req, res) => {
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

app.get("/register", register);

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", login);

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};



