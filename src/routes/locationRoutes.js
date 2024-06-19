const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Route to fetch locations (pickup location and destination)
router.get('/locations', locationController.fetchLocationsFromApp);

module.exports = router;
