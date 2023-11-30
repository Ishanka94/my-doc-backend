const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authenticateToken = require('../../middleware/authenticate-token');

// router.get('/get-all-flows', authenticateToken, controller.getAllFlows);
router.get('/get-all-flows', controller.getAllFlows);
router.post('/create-flow', controller.createFlow);

module.exports = router;