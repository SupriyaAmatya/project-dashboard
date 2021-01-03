import { Router } from 'express';
import User from '../models/User';
import * as bcrypt from '../utils/bcrypt';
import * as authController from '../controllers/authController';

const router = Router();

router.post('/login', authController.login);

router.post('/refresh', authController.refresh);

export default router;
