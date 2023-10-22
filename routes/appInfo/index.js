const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-app-info', controller.getAppInfo);

module.exports = router;