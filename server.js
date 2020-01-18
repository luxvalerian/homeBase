// Require modules
const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const port = 3000; // We'll eventually set the port dynamically
const indexRouter = require('./routes/index');
const cafesRouter = require('./routes/cafes');
const reviewsRouter = require('./routes/reviews');

// Set up express app
const app = express();

require('dotenv').config()
// Connect to DB w mongoose
require('./config/database');
require('./config/passport');


// Configure Express App app.set()
app.set('view engine', 'ejs');

// Mount middleware app.use()
app.use(logger('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'ThisIshomeBase!',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


// Mount Routes app.use()
app.use('/', indexRouter);
app.use('/cafes', cafesRouter);
app.use('/', reviewsRouter);

// Tell App to listen
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});