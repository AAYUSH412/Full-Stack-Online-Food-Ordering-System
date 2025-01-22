import Order from '../models/orderModel.js';
import Cart from '../models/cartdata.js';

export const createOrder = async (req, res) => {
  try {
    const { paymentId, razorpayOrderId } = req.body;
    
    // Get cart items
    const cart = await Cart.findOne();
    if (!cart || !cart.items.length) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }

    // Create order with both IDs
    const order = await Order.create({
      user: req.user.id,
      items: cart.items,
      totalAmount: cart.totalAmount,
      paymentId,
      razorpayOrderId, // Add this field
      restaurantId: cart.items[0].restaurantId
    });

    // Clear cart after order creation
    await Cart.findOneAndDelete();

    res.status(201).json({
      success: true,
      data: {
        _id: order._id,
        razorpayOrderId: order.razorpayOrderId,
        ...order._doc
      }
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: orders
    });
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    let order = await Order.findOne({
      $or: [
        { _id: req.params.orderId },
        { razorpayOrderId: req.params.orderId }
      ],
      user: req.user.id
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    
    let order = await Order.findOne({
      $or: [
        { _id: req.params.orderId },
        { razorpayOrderId: req.params.orderId }
      ]
    });

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    order.status = status;
    await order.save();

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Update order status error:', error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};