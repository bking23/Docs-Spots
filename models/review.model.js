const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    authorName: {type: String, required: true}
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;