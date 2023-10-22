const express = require('express');
const router = express.Router();
// const controller = require('./controller');
const formRouter = require('./form');
const flowRouter = require('./flow');
const appInfoRouter = require('./appInfo');

router.use('/form', formRouter);
router.use('/flow', flowRouter);
router.use('/appInfo', appInfoRouter);

module.exports = router;


