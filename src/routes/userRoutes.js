// const express = require('express');
// const userController = require('../controllers/userController');

// const router = express.Router();

// // Register a new user
// router.post('/register', userController.register);

// // Login user
// router.post('/login', userController.login);

// // Edit user
// router.put('/update', userController.updateUser);

// router.get('/profile', userController.getUserByToken);



// module.exports = router;

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.put('/update', userController.updateUser);
router.get('/profile', userController.getUserByToken);

module.exports = router;
