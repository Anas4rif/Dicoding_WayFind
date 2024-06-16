const express = require('express');
const router = express.Router();
const { predict } = require('../controllers/modelController');

router.post('/predict', modelController.predict);

module.exports = router;
