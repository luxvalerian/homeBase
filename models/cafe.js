const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewsSchema = new Schema ({
    content: String,
}, {
    timestamps: true
});

const cafeSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    address: String,
    hours: String,
    openSundays: {
        type: Boolean, 
        default: false
    },
    reviews: [reviewsSchema],
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Visitor'
    }
}, {
    timestamps: true
});

// step 7.3 modifies the student model. should i put the users model here?

module.exports = mongoose.model('Cafe', cafeSchema);