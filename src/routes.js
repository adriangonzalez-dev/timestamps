const express = require('express');
const router = express.Router();

//controller
const {getDates} = require('./controllers');

router.get('/:date', getDates);

module.exports = router;