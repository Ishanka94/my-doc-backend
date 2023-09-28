const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-all-flows', controller.getAllFlows);
router.post('/create-flow', controller.createFlow);

module.exports = router;