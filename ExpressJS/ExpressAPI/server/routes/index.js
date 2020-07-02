const chirpRouter = require('./chirps')
const express = require('express');
const cors = require('cors');

let router = express.Router();

router.use('/chirps', chirpRouter); 

module.exports = router;