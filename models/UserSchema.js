const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },  // Reference to Role schema
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],  // Products created by user
    isActive: {
        type: Boolean,
        default: true
    },  // For enable/disable user
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);
