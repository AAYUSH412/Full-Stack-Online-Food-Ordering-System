import express from 'express';
import { 
  createOrder, 
  getUserOrders, 
  getOrderById,
  updateOrderStatus,
  getAllOrders // Add this
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post('/', createOrder);
router.get('/user', getUserOrders);
router.get('/all',  getAllOrders); // Add this route
router.get('/:orderId', getOrderById);
router.patch('/:orderId/status', updateOrderStatus);

export default router;