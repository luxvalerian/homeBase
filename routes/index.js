const router = require('express').Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index');

router.get('/', function(req, res) {
    res.render('index', {
        user: req.user
    });
});


router.get('/auth/google', passport.authenticate(
    'google', 
    { scope: ['profile', 'email'] }
));

// below is step 8.3 google callback route after building visitors Schema
router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect : '/visitors',
        failureRedirect : '/'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

router.get('/', indexCtrl.index);

module.exports = router;