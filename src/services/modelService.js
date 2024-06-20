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
    const { age, gender, pickupLocation, destination } = inputData;

    // Encode gender
    const genderValue = gender === 'male' ? 1 : 0;

    // Prepare input for the model
    const [pickupLatitude, pickupLongitude] = pickupLocation.split(',').map(Number);
    const destinationValue = destination; // Assuming destination is received as a numeric value or string to be converted

    const inputTensor = tf.tensor2d([[age, genderValue, pickupLatitude, pickupLongitude]]);

    // Get prediction from the model
    const prediction = model.predict(inputTensor);
    const output = prediction.arraySync();

    // Find the highest probability vehicle type
    const vehicleTypes = ['KRL', 'Angkot', 'Transjakarta', 'Ojek'];
    const highestProbIndex = output[0].indexOf(Math.max(...output[0]));
    const selectedVehicle = vehicleTypes[highestProbIndex];

    return selectedVehicle;
};

module.exports = {
    processInput,
    calculatePrice
};
