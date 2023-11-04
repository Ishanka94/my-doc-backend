const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-all-forms', controller.getAllForms);
router.post('/create-form', controller.createForm);
router.post('/get-form-by-path', controller.getFormByPath);

module.exports = router;