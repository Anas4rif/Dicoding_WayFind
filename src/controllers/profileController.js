const db = require('../config/mysqlConfig'); // Pastikan Anda sudah mengatur koneksi database

exports.getProfile = async (req, res) => {
    try {
        const userId = req.user.id; // Asumsikan Anda memiliki middleware otentikasi yang menetapkan req.user

        const [rows] = await db.query('SELECT name, age, email, gender FROM users WHERE id = ?', [userId]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userProfile = rows[0];

        res.status(200).json(userProfile);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
