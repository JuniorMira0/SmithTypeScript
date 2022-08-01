import { Router } from 'express';
import productController from '../controller/product.controller';

const router = Router();

router
  .post('/products', productController.productController);

export default router;