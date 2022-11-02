const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const { db } = require("./app/models/user.model");
const { initialize } = require("passport");
const { role } = require("./app/models");

const app = express();

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
    secret: process.env.COOKIE_KEY, // should use as secret environment variable
    httpOnly: true
  })
);

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
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

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
