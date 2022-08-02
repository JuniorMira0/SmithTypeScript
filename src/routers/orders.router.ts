import { Router } from 'express';
import ordersController from '../controller/orders.controller';

const router = Router();

router
  .route('/orders')
  .get(ordersController.getAllOrders);

export default router;