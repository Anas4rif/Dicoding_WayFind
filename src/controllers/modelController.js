const tf = require('@tensorflow/tfjs-node');
const path = require('path');

const { processInput } = require('../services/modelService');

// Load the model
let model;
(async () => {
    model = await tf.loadLayersModel(`file://${path.join(__dirname, '..', 'model', 'model.json')}`);
    console.log("Model loaded successfully.");
})();

// Predict function
exports.predict = async (req, res) => {
    try {
        const inputData = req.body;

        const result = await processInput(inputData);

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Receive distance and calculate the price
exports.receiveDistance = async (req, res) => {
    try {
        const { age, gender, distance } = req.body;

        if (!age || !gender || !distance) {
            return res.status(400).json({ message: 'Age, gender, and distance are required' });
        }

        // Process input through the model
        const inputData = { age, gender, distance };
        const result = await processInput(inputData);

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};