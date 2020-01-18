const Cafe = require('../models/cafe');

module.exports = {
    index,
    show,
    new: newCafe,
    create,
    delete: deleteCafe,
    edit,
    update
}


function edit(req, res) {
    Cafe.findById(req.params.id, function(err, cafe) {
        res.render('cafes/edit', {
            cafe
        });
    })
}

function update(req, res) {
    req.body.openSundays = req.body.openSundays === 'on';
    Cafe.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedCafe) {
        res.redirect('/cafes');
    })
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

function deleteCafe(req, res) {
    Cafe.findByIdAndDelete(req.params.id, function() {
        res.redirect('/cafes');
    });
}
