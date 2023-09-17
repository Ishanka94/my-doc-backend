const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-all-forms', controller.getAllForms);
router.post('/create-form', controller.createForm);

module.exports = router;