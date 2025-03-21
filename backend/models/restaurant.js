import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: String,
  isVeg: { type: Boolean, default: false },
  category: { type: String, required: true }
});

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  cuisine: [String],
  address: { type: String, required: true },
  rating: { type: Number, default: 0 },
  image: [String],
  menu: [menuItemSchema],
  deliveryTime: Number,
  costForTwo: Number,
  isOpen: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Restaurant', restaurantSchema);