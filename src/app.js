const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stationRoutes = require('./routes/stationRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/stations', stationRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
