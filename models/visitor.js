const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const visitorSchema = new Schema ({
    name: String,
    email: String,
    avatarUrl: String,
//  number of Comments: Number,
//  averageUserRating: Number,
    googleId: String
    }, {
        timestamps: true
    });

    module.exports = mongoose.model('Visitor', visitorSchema);
