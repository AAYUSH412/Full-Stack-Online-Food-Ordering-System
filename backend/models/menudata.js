import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true },
  isVeg: { type: Boolean, required: true, }
});

const restaurantdetailsSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },
  items: [menuItemSchema]
}, {
  timestamps: true
});

export default mongoose.model("RestaurantDetails", restaurantdetailsSchema);