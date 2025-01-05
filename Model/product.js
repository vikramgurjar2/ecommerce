const mongoose = require('mongoose'); // Import mongoose
const { Schema } = mongoose; // Destructure Schema from mongoose
//console.log(Schema);
// Define the product schema
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  brand: String,
  images: [String],
  thumbnail: String,
  category: String,
});

// Create and export the Product model
module.exports.product = mongoose.model('product', productSchema);

