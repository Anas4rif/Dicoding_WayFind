const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { getProfile } = require('../controllers/profileController');

// Middleware untuk memeriksa token
router.get('/profile', (req, res) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        console.log('Token not provided');
        return res.status(401).json({ message: 'Please authenticate.' });
    }

    try {
        console.log('Token received:', token);
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log('Token decoded:', decoded);
        const userId = decoded.id;
        req.user = { id: userId }; // Set user ID to request object for controller use

        getProfile(req, res); // Call the controller
    } catch (err) {
        console.log('Error verifying token:', err.message);
        res.status(401).json({ message: 'Please authenticate.' });
    }
});

module.exports = router;
