const tf = require('@tensorflow/tfjs-node');
const path = require('path');
const { processInput, calculatePrice } = require('../services/modelService');

// Load the model
let model;
(async () => {
    model = await tf.loadLayersModel(`file://${path.join(__dirname, '..', 'model', 'model.json')}`);
    console.log("Model loaded successfully.");
})();

// Predict function
exports.predict = async (req, res) => {
    try {
        const { age, gender, pickupLocation, destination, distance } = req.body;

        // Ensure the necessary inputs are present
        if (!age || !gender || !pickupLocation || !destination || !distance) {
            return res.status(400).json({ message: 'Age, gender, pickup location, destination, and distance are required' });
        }

        // Get the vehicle recommendation from the model
        const vehicle = await processInput({ age, gender, pickupLocation, destination });

        // Calculate the price based on the recommended vehicle and distance
        const price = calculatePrice(vehicle, distance);

        res.status(200).json({
            vehicle,
            price
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Receive distance and calculate the price (if you need this route separately)
exports.receiveDistance = async (req, res) => {
    try {
        const { vehicle, distance } = req.body;

        if (!vehicle || !distance) {
            return res.status(400).json({ message: 'Vehicle and distance are required' });
        }

        // Calculate the price based on the recommended vehicle and distance
        const price = calculatePrice(vehicle, distance);

        res.status(200).json({
            vehicle,
            price,
            distance
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
