const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const db = require("./app/models");
const dbConfig = require("./app/config/db.config");

const app = express();

const Role = db.role;

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "login-session",
    keys: ['process.env.COOKIE_KEY'], // should use as secret environment variable
    httpOnly: true
  })
);

db.mongoose.connect(dbConfig.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    db.mongoose.connection.useDb('login-test');
    console.log("Connected to MongoDB");
    initial();
}).catch((err) => {
    console.error("Connection error", err);
    process.exit();
})

function initial(){
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {  //Creates inital roles for database.
          new Role({
            name: "user"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'user' to roles collection");
          });
    
          new Role({
            name: "moderator"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'moderator' to roles collection");
          });
    
          new Role({
            name: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
          });
        }
      });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to login application." });
});

require("./app/routes/auth.routes");
require("./app/routes/user.routes");

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
