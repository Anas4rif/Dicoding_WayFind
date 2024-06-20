require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const modelRoutes = require('./routes/modelRoutes');
const locationRoutes = require('./routes/locationRoutes');  
const profileRoutes = require('./routes/profileRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/model', modelRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api', profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
