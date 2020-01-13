const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');


router.get('/auth/google', passport.authenticate(
    'google', 
    { scope: ['profile', 'email'] }
));
// do step 8.3 google callback route after building visitors Schema
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});
router.get('/', indexCtrl.index);

module.exports = router;