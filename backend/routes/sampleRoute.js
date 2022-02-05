const express = require('express');
const router = express.Router();
const {sampleController} = require('../controllers/sampleController')

router.get('/sampleURL', sampleController)

module.exports = router;