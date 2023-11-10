const express = require('express');
const router = express.Router();
// const controller = require('./controller');
const formRouter = require('./form');
const flowRouter = require('./flow');
const appInfoRouter = require('./appInfo');
const authRouter = require('./auth');

router.use('/form', formRouter);
router.use('/flow', flowRouter);
router.use('/appInfo', appInfoRouter);
router.use('/auth', authRouter);

module.exports = router;


