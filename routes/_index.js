const express = require('express');
const router = express.Router();
const datebase = require('./database.js')

router.use('/db', datebase)

module.exports = router;