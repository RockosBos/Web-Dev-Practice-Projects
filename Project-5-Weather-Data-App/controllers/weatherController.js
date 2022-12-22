const https = require('https');
const { response } = require('express');

const homeView = (req, res) => {
    res.render("home", {});
}

const weatherSubmit = (req, res, next) => {
    
    const latitude = req.body.lat;
    const longitude = req.body.lon;

    var data = '';

    //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}
    
    https.get("https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + process.env.WEATHER_API, (resp) => {

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            
            res.render("home", {document: data});
        });
    }).on("error", (err) => {
        console.log("error: " + err.message);
    });
}

module.exports ={
    homeView,
    weatherSubmit
}