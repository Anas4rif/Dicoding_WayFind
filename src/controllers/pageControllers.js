exports.homePage = (req, res) => {
    res.status(200).json({ message: 'Welcome to the Home Page' });
};

exports.landingPage = (req, res) => {
    res.status(200).json({ message: 'Welcome to the Landing Page' });
};

exports.mapsPage = (req, res) => {
    res.status(200).json({ message: 'Welcome to the Maps Page' });
};
