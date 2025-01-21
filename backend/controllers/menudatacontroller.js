import RestaurantDetails from "../models/menudata.js";
import Restaurant from "../models/restaurentdata.js";
import imagekit from "../config/imagekit.js";

export const createMenu = async (req, res) => {
  try {
    const restaurantId = req.params.restaurantId;
    const { name, description, price, isVeg, category } = req.body;

    // Validate restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found"
      });
    }

    // Handle image upload
    if (!req.files || !req.files.image) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image"
      });
    }

    const image = req.files.image;
    const imageUpload = await imagekit.upload({
      file: image.data.toString('base64'),
      fileName: `menu-${Date.now()}-${image.name}`,
      folder: "food-delivery/menu"
    });

    // Find or create restaurant menu
    let restaurantMenu = await RestaurantDetails.findOne({ restaurant: restaurantId });
    
    if (!restaurantMenu) {
      restaurantMenu = new RestaurantDetails({
        restaurant: restaurantId,
        items: []
      });
    }

    // Add menu item
    restaurantMenu.items.push({
      name,
      description,
      price: Number(price),
      image: [imageUpload.url],
      isVeg: Boolean(isVeg),
      category
    });

    await restaurantMenu.save();

    res.status(201).json({
      success: true,
      message: "Menu item added successfully",
      data: restaurantMenu
    });

  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getMenu = async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const menu = await RestaurantDetails.findOne({ restaurant: restaurantId });
    
    if (!menu) {
      return res.status(200).json({
        success: true,
        data: { items: [] }
      });
    }

    res.json({
      success: true,
      data: menu
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};