const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//mongodb
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('e don connect'))
    .catch(err => console.log(err));

app.use(express.static('/', require('./routes/survey')));

//BodyParsing
app.use(express.urlencoded({extended: false}));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server start for port: " + PORT))