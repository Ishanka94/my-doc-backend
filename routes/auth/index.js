const express = require('express');
const router = express.Router();
const authController = require('./auth-controller');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/update', authController.updateUser);

module.exports = router;