const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController');

router.get('/all', destinationController.getAllDestinations);

module.exports = router;
