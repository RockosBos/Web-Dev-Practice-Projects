const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

dotenv.config();

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}));
app.use("/", require("./routes/maps.js"));

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server Listening on Port: ${PORT}`);
    }
})

