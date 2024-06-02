const express = require('express');
const router = express.Router();
const stationController = require('../controllers/stationController');

// GET all stations
router.get('/', stationController.getStations);

// POST a new station
router.post('/', stationController.createStation);

module.exports = router;
