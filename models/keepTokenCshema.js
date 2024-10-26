const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Token schema (for password reset or other purposes)
const tokenSchema = new Schema({
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
    }  
});

module.exports = mongoose.model('Token', tokenSchema);
