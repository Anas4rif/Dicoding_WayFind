const db = require('../config/mysqlConfig');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = process.env.SECRET_KEY;

exports.updateUser = async (req, res) => {
    const token = req.headers['authorization'];
    const { email, password } = req.body;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const userId = decoded.id;

        const hashedPassword = await bcrypt.hash(password, 10);
        await db.query('UPDATE users SET email = ?, password = ? WHERE id = ?', [email, hashedPassword, userId]);

        res.status(200).json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getUserByToken = async (req, res) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const userId = decoded.id;

        const [users] = await db.query('SELECT * FROM users WHERE id = ?', [userId]);
        const user = users[0];

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
