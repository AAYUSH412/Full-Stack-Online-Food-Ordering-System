import express from 'express';
import {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant
} from '../controllers/restaurantController.js';

const router = express.Router();

// CRUD Routes
router.post('/', createRestaurant);
router.get('/list', getRestaurants);
router.get('/list/:id', getRestaurantById);
router.put('/update/:id', updateRestaurant);
router.delete('/delete/:id', deleteRestaurant);

export default router;