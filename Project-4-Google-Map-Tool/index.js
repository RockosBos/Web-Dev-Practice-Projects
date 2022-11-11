const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get("/", (req, res) =>{
    res.send("Hello");
});

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`Server Listening on Port: ${PORT}`);
    }
})