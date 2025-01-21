import express from 'express';
import { 
  createOrder, 
  getUserOrders, 
  getOrderById,
  updateOrderStatus 
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // All order routes require authentication

router.post('/', createOrder);
router.get('/user', getUserOrders);
router.get('/:orderId', getOrderById);
router.patch('/:orderId/status', updateOrderStatus);

export default router;