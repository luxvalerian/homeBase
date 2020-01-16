const express = require('express');
const router = express.Router();
const cafesCtrl = require('../controllers/cafes');

// GET/cafes/new
router.get('/', cafesCtrl.index);
router.get('/new', cafesCtrl.new);
router.get('/:id', cafesCtrl.show);
router.post('/', cafesCtrl.create);
router.get('/visitors', isLoggedIn, cafesCtrl.index);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;

// router.get('/', cafesCtrl.isloggedIn)