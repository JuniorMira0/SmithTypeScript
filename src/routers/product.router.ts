import { Router } from 'express';
import productController from '../controller/product.controller';

const router = Router();

router
  .route('/products')
  .post(productController.createProduct)
  .get(productController.getAllProducts);

export default router;