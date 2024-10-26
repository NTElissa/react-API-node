const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Role schema
const roleSchema = new Schema({
  name: { type: String, required: true }  // Example: 'admin', 'user'
});

module.exports = mongoose.model('Role', roleSchema);
