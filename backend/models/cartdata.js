import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  menuItem: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    isVeg: { type: Boolean },
  },
  quantity: { type: Number, required: true, default: 1 },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }
});

const cartSchema = new mongoose.Schema({
  items: [cartItemSchema],
  totalAmount: { type: Number, default: 0 }
}, {
  timestamps: true
});

export default mongoose.model("Cart", cartSchema);