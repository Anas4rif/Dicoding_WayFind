const express = require('express');
const locationController = require('../controllers/locationController'); // Pastikan ini benar

const router = express.Router();

router.get('/pickup', locationController.getPickupLocation); // Pastikan controller ini ada
router.get('/destination', locationController.getDestination); // Pastikan controller ini ada

module.exports = router;
