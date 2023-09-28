const express = require('express');
const router = express.Router();
// const controller = require('./controller');
const formRouter = require('./form');
const flowRouter = require('./flow');

router.use('/form', formRouter);
router.use('/flow', flowRouter);

module.exports = router;


