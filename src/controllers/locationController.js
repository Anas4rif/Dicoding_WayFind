// Definisikan fungsi untuk mendapatkan lokasi penjemputan
const getPickupLocation = (req, res) => {
    // Logic untuk mendapatkan lokasi penjemputan user
    res.json({ location: 'Current Location' });
};

// Definisikan fungsi untuk mendapatkan tujuan
const getDestination = (req, res) => {
    // Logic untuk mendapatkan tujuan yang sudah ditetapkan
    res.json({ destination: 'Predefined Destination' });
};

module.exports = {
    getPickupLocation,
    getDestination
};
