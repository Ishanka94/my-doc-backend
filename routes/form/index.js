const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-all-forms', controller.getAllForms);

module.exports = router;