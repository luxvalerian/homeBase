const Cafe = require('../models/cafe');

module.exports = {
    create,
    deleteOne
};

function create(req, res) {
    Cafe.findById(req.params.id, function(err, cafe) {
        cafe.reviews.push(req.body);
        cafe.save(function(err) {
            res.redirect(`/cafes/${cafe._id}`);
        });
    });
}

function deleteOne(id) {
    Cafe.splice(id, 1);
}