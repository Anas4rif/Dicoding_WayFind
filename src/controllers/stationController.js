const db = require('../config/firestoreConfig');

exports.getStations = async (req, res) => {
    try {
        const [stations] = await db.query('SELECT * FROM stations');
        res.status(200).json(stations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStation = async (req, res) => {
    const { name, location } = req.body;

    if (!name || !location) {
        return res.status(400).json({ message: 'Name and location are required' });
    }

    try {
        await db.query('INSERT INTO stations (name, location) VALUES (?, POINT(?, ?))', [name, location.lat, location.lng]);
        res.status(201).json({ message: 'Station created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
