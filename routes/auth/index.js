const express = require('express');
const router = express.Router();
const authController = require('./auth-controller');

router.get('/get-all-users', authController.getAllUsers);
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/update', authController.updateUser);

module.exports = router;