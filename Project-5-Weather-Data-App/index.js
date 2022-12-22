const express = require('express');
const request = require('request');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs");
app.use("/", require("./routes/weatherRoute"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server start for port: " + PORT));