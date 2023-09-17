const express = require('express');
const router = express.Router();
// const controller = require('./controller');
const formRouter = require('./form');

router.use('/form', formRouter);

module.exports = router;


