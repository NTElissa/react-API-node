const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Session schema
const sessionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1h'
    }  // Token expires in 1 hour
});

module.exports = mongoose.model('Session', sessionSchema);
