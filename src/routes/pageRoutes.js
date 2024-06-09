const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

// Home Page
router.get('/home', pageController.homePage);

// Landing Page
router.get('/landing', pageController.landingPage);

// Maps Page
router.get('/maps', pageController.mapsPage);

module.exports = router;
