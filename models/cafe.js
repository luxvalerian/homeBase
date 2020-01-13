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

// step 7.3 modifies the student model. should i put the users model here?

module.exports = mongoose.model('Cafe', cafeSchema);