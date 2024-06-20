const db = require('../config/mysqlConfig'); // Pastikan Anda sudah mengatur koneksi database

exports.getProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log('User ID from token:', userId);

        const [rows] = await db.query('SELECT name, age, email, gender FROM users WHERE id = ?', [userId]);

        if (rows.length === 0) {
            console.log('User not found');
            return res.status(404).json({ message: 'User not found' });
        }

        const userProfile = rows[0];
        console.log('User profile:', userProfile);

        res.status(200).json(userProfile);
    } catch (err) {
        console.log('Error fetching user profile:', err.message);
        res.status(500).json({ message: err.message });
    }
};
