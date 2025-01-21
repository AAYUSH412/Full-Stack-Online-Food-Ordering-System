import Cart from "../models/cartdata.js";

export const addToCart = async (req, res) => {
  try {
    const { menuItem, restaurantId } = req.body;
    
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ items: [], totalAmount: 0 });
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.menuItem.name === menuItem.name
    );

    if (existingItemIndex > -1) {
      // Update quantity if item exists
      cart.items[existingItemIndex].quantity += 1;
    } else {
      // Add new item if it doesn't exist
      cart.items.push({
        menuItem,
        quantity: 1,
        restaurantId
      });
    }

    // Calculate total amount
    cart.totalAmount = cart.items.reduce(
      (total, item) => total + (item.menuItem.price * item.quantity),
      0
    );

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne();
    res.status(200).json({
      success: true,
      data: cart || { items: [], totalAmount: 0 }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { itemId, quantity } = req.body;
    
    const cart = await Cart.findOne();
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found"
      });
    }

    const itemIndex = cart.items.findIndex(item => item._id.toString() === itemId);
    
    if (quantity <= 0) {
      cart.items.splice(itemIndex, 1);
    } else {
      cart.items[itemIndex].quantity = quantity;
    }

    cart.totalAmount = cart.items.reduce(
      (total, item) => total + (item.menuItem.price * item.quantity),
      0
    );

    await cart.save();

    res.status(200).json({
      success: true,
      data: cart
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};