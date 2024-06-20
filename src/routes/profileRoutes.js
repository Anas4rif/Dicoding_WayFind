const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');
const jwt = require('jsonwebtoken'); // Pastikan Anda mengimport JWT
router.get('/profile', (req, res) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id; // Mendapatkan user ID dari token

        // Sekarang Anda bisa langsung melakukan query ke database atau
        // layanan autentikasi untuk mendapatkan profil user berdasarkan userId
        // Contoh: Mengambil data dari database
        const userProfile = {
            name: "John Doe",
            age: 30,
            email: "johndoe@example.com",
            gender: "male"
        };

        res.status(200).json(userProfile);
    } catch (err) {
        res.status(401).json({ message: 'Please authenticate.' });
    }
});

module.exports = router;
