import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/orders', OrderControllers.createProduct);
router.get('/revenue', OrderControllers.getTotalRevenue);

export const OrderRoutes = router;
