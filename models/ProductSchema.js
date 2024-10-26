import mongoose from "mongoose";
const { Schema } = mongoose;

// Product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: { type: String },
  category: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  imageUrl: {
    type: String
  },  // Store image path or URL
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },  // Reference to user who created product
  softDeleted: {
    type: Boolean,
    default: false
  },  // For soft delete functionality
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
