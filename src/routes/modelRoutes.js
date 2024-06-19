const express = require('express');
const router = express.Router();
const { predict, receiveDistance  } = require('../controllers/modelController');

router.post('/predict', predict);
router.post('/distance', receiveDistance);

module.exports = router;
