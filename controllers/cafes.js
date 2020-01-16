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
    console.log(req.user);
    Cafe.findById(req.params.id).populate('addedBy').exec(function(err, cafe) { //user info
        res.render('cafes/show', { title: 'Café Detail', cafe, user: req.user })
    })
}

function newCafe(req, res){
    res.render('cafes/new', { title: 'Add Café' });
}

function create(req, res){
    req.body.openSundays = !!req.body.openSundays;
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    console.log(req.body);
    console.log(req.user);
    const cafe = new Cafe(req.body);
    cafe.addedBy = req.user._id;

    cafe.save(function(err) {
        if (err) return res.redirect('cafes/new');
        console.log(cafe);
        res.redirect(`/cafes/${ cafe._id }`);
    });
}
