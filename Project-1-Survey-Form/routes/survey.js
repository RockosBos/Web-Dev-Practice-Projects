const express = require('express');

const {surveyView, resultsView, saveEntry, getEntry} = require('../controllers/surveyController');

const router = express.Router();

router.get('/', surveyView);
router.get('/data', getEntry)
router.get('/results', resultsView);
router.post('/surveySubmit', saveEntry);

module.exports = router;