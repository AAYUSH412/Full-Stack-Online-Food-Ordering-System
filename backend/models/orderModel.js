import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  menuItem: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    isVeg: { type: Boolean }
  },
  quantity: { type: Number, required: true }
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  totalAmount: {
    type: Number,
    required: true
  },
  paymentId: {
    type: String,
    required: true
  },
  razorpayOrderId: { // Add this field
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Order Received', 'Preparing', 'Out for Delivery', 'Delivered', 'Cancelled'],
    default: 'Order Received'
  },
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Order', orderSchema);