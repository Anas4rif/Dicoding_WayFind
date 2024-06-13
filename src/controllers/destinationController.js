const db = require('../config/mysqlConfig');

exports.getAllDestinations = async (req, res) => {
    try {
        const [destinations] = await db.query('SELECT * FROM destinations');
        res.status(200).json(destinations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
