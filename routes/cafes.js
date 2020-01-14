const express = require('express');
const router = express.Router();
const cafesCtrl = require('../controllers/cafes');

// GET/cafes/new
router.get('/', cafesCtrl.index);
router.get('/new', cafesCtrl.new);
router.get('/:id', cafesCtrl.show);
router.post('/', cafesCtrl.create);

module.exports = router;