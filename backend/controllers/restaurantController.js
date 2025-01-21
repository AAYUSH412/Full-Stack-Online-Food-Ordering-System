import fs from "fs";
import imagekit from "../config/imagekit.js";
import Restaurant from "../models/restaurentdata.js";

const createRestaurant = async (req, res) => {
  try {
    const { name, cuisine, deliveryTime, costForTwo, rating, offers } =
      req.body;

    // Check if files exist
    if (!req.files || !Object.keys(req.files).length) {
      return res.status(400).json({ message: "No images uploaded" });
    }

    // Get image files
    const imageFiles = Object.values(req.files).filter((file) =>
      file.mimetype.startsWith("image/")
    );

    if (!imageFiles.length) {
      return res.status(400).json({ message: "No valid images found" });
    }

    // Upload images to ImageKit
    const imageUrls = await Promise.all(
      imageFiles.map(async (file) => {
        const result = await imagekit.upload({
          file: file.data.toString("base64"),
          fileName: `restaurant-${Date.now()}-${file.name}`,
          folder: "food-delivery",
        });
        return result.url;
      })
    );

    // Create restaurant
    const restaurant = new Restaurant({
      name,
      cuisine,
      deliveryTime,
      costForTwo,
      image: imageUrls,
      rating,
      offers,
    });

    await restaurant.save();

    res.status(201).json({
      success: true,
      message: "Restaurant created successfully",
      data: restaurant,
    });
  } catch (error) {
    console.error("Error creating restaurant:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();

    res.status(200).json({
      success: true,
      data: restaurants,
    });
  } catch (error) {
    console.error("Error getting restaurants:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    res.status(200).json({
      success: true,
      data: restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    let restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    // Handle image upload if new images are provided
    if (req.files && Object.keys(req.files).length > 0) {
      const imageFiles = Object.values(req.files).filter((file) =>
        file.mimetype.startsWith("image/")
      );

      if (imageFiles.length > 0) {
        const imageUrls = await Promise.all(
          imageFiles.map(async (file) => {
            const result = await imagekit.upload({
              file: file.data.toString("base64"),
              fileName: `restaurant-${Date.now()}-${file.name}`,
              folder: "food-delivery",
            });
            return result.url;
          })
        );
        req.body.image = imageUrls;
      }
    }

    // Update restaurant
    restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: restaurant,
    });
  } catch (error) {
    console.error("Error updating restaurant:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (!restaurant) {
      return res.status(404).json({
        success: false,
        message: "Restaurant not found",
      });
    }

    // Delete restaurant from database
    await restaurant.deleteOne();

    res.status(200).json({
      success: true,
      message: "Restaurant deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
