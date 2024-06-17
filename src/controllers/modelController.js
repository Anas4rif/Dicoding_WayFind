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

