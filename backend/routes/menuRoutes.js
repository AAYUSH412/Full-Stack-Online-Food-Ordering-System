import express from "express";
import { createMenu, getMenu } from "../controllers/menudatacontroller.js";

const router = express.Router();

router.post('/restaurant/:restaurantId', createMenu);
router.get('/restaurant/:restaurantId', getMenu);

export default router;