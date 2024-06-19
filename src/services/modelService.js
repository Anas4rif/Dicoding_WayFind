const tf = require('@tensorflow/tfjs-node');
const path = require('path');

let model;
(async () => {
    model = await tf.loadLayersModel(`file://${path.join(__dirname, '..', 'model', 'model.json')}`);
    console.log("Model loaded successfully.");
})();

// Calculate price based on vehicle type and distance
const calculatePrice = (vehicleType, distance) => {
    const prices = {
        KRL: 5000,
        Angkot: 3000,
        Transjakarta: 4000,
        Ojek: 2000
    };

    return prices[vehicleType] * distance;
};

// Process input and get prediction from model
const processInput = async (inputData) => {
    const { age, gender, distance } = inputData;

    // Prepare input for the model
    const inputTensor = tf.tensor2d([[age, gender, distance]]); // assuming the model expects age, gender, and distance

    // Get prediction from the model
    const prediction = model.predict(inputTensor);
    const output = prediction.arraySync();

    // Find the highest probability vehicle type
    const vehicleTypes = ['KRL', 'Angkot', 'Transjakarta', 'Ojek'];
    const highestProbIndex = output[0].indexOf(Math.max(...output[0]));
    const selectedVehicle = vehicleTypes[highestProbIndex];

    // Calculate price
    const price = calculatePrice(selectedVehicle, distance);

    return {
        vehicle: selectedVehicle,
        price: price,
        distance: distance
    };
};

module.exports = {
    processInput
};