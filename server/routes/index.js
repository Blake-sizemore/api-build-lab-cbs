const express = require('express');
// pulls in expressJS usage
const chirpRouter = require('./chirps');
// create usage of url space

let router = express.Router();
router.use('/chirps',chirpRouter);

module.exports = router;