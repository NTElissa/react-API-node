const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Review schema
const reviewSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },  // Reference to Product
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },  // Reference to User
    rating: {
        type: Number,
        required: true,
        min: 1, max: 5
    },
    comment: { type: String },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Review', reviewSchema);
