import { Router } from 'express';
import userController from '../controller/user.controller';

const router = Router();

router
  .route('/users')
  .post(userController.createUser);

export default router;