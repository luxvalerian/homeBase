const express = require('express');
const router = express.Router();
const cafesCtrl = require('../controllers/cafes');

// GET/cafes/new
router.get('/new', cafesCtrl.new);

module.exports = router;