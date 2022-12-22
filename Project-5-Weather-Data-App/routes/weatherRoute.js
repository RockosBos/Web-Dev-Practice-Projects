const express = require('express');

const {homeView, weatherSubmit} = require("../controllers/weatherController");

const router = express.Router();

router.get("/", homeView);

router.post("/weatherSubmit", weatherSubmit);

module.exports = router;