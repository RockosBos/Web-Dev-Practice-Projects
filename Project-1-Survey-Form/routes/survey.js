const express = require('express')
const {surveyView, resultsView} = require('../controllers/surveyController');
const router = express.Router();
router.get('/survey', surveyView);
router.get('/results', resultsView);
module.exports = router;