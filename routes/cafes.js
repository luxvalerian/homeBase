const express = require('express');
const router = express.Router();
const cafesCtrl = require('../controllers/cafes');

// GET/cafes/new
router.post('/', cafesCtrl.create);
router.get('/', cafesCtrl.index);
router.get('/new', cafesCtrl.new);
router.get('/visitors', isLoggedIn, cafesCtrl.index);
router.get('/:id', cafesCtrl.show);
router.get('/:id/edit', cafesCtrl.edit);
router.put('/:id', cafesCtrl.update);
router.delete('/:id', cafesCtrl.delete);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
module.exports = router;

// router.get('/', cafesCtrl.isloggedIn)