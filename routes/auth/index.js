const express = require('express');
const router = express.Router();
// const controller = require('./controller');
const authController = require('./auth-controller');

// router.get('/get-all-flows', controller.getAllFlows);
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

module.exports = router;