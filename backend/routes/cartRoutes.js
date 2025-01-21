import express from 'express';
import { addToCart, getCart, updateCartItem } from '../controllers/cartController.js';

const router = express.Router();

router.post('/add', addToCart);
router.get('/', getCart);
router.put('/update', updateCartItem);

export default router;