const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cafeSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    addressTown: String,
    hours: String,
    openSundays: {
        type: Boolean, 
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Cafe', cafeSchema);