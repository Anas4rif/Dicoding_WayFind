const db = require('../config/firebaseConfig');

exports.getStations = async (req, res) => {
    try {
        const snapshot = await db.collection('stations').get();
        const stations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(stations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createStation = async (req, res) => {
    try {
        const { name, location } = req.body;
        const station = { name, location };
        const docRef = await db.collection('stations').add(station);
        res.status(201).json({ id: docRef.id, ...station });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
