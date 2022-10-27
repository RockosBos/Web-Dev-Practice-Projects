const passport = require("passport");

var app = express();

app.get('/', (req, res) => {
    res.render("home");
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render("secret");
});

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", (req, res) => {
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
    })
})

