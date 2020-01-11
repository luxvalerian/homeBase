const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cafeSchema = new Schema({
    name: String,
    addressTown: String,
    hours: String,
    averageRating: String,
    openSundays: Boolean
});

module.exports = mongoose.model('Cafe', cafeSchema);