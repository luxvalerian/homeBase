const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
function(accessToken, refreshToken, profile, cb) {

}
));
//step 7.5 below. serializeUser method gives passport the nugget of data
//to put into the session for this authenticated user
passport.serializeUser(function(visitor, done) {
    done(null, visitor.id);
});
// step 7.6 deserializeUserMethod
passport.deserializeUser(function (id, done) {
    Visitor.findById(id, function(err, visitor) {
        done(err, visitor);
    });
});
