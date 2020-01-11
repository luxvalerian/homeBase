const Cafe = require('../models/cafe');

module.exports = {
    new: newCafe,
    create,
    index
}

function newCafe(req, res){
    res.render('cafes/new');
}

function create(req, res){
    req.body.openSundays = !!req.body.openSundays;
    // remove whitespace next to commas
  req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
  // split if it's not an empty string
  if (req.body.cast) req.body.cast = req.body.cast.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const cafe = new Cafe(req.body);

    cafe.save(function(err) {
        if (err) return res.render('cafes/new');
        console.log(cafe);
        res.redirect('/cafes');
    });
}

function index(req, res){
    Cafe.find({}, function(err, cafes){
        res.render('cafes/index', {
            cafes
        });
    });
}