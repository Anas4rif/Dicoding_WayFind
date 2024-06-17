const express = require('express');
const router = express.Router();
const { predict } = require('../controllers/modelController');

router.post('/predict', predict);

module.exports = router;
