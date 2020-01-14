const Cafe = require('../models/cafe');

module.exports = {
    index,
    show,
    new: newCafe,
    create,
}

function index(req, res){
    Cafe.find({}, function(err, cafes) {
        res.render('cafes/index', {
            title: 'All Cafés', cafes });
    });
}

function show(req, res) {
    Cafe.findById(req.params.id, function(err, cafe) {
        res.render('cafes/show', { title: 'Café Detail', cafe })
    })
}

function newCafe(req, res){
    res.render('cafes/new', { title: 'Add Café' });
}

function create(req, res){
    req.body.openSundays = !!req.body.openSundays;
//     // remove whitespace next to commas
//     req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
//   // split if it's not an empty string
//     if (req.body.cast) req.body.cast = req.body.cast.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const cafe = new Cafe(req.body);

    cafe.save(function(err) {
        if (err) return res.redirect('cafes/new');
        console.log(cafe);
        res.redirect(`/cafes/${ cafe._id }`);
    });
}
