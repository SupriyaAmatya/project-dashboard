import { Router } from 'express';

import * as userController from '../controllers/userController';
import { authenticate } from '../middleware/authenticate';

const router = Router();

/**
 * @route POST api/users/signup
 * 
 * @description Register a new user.
 */
router.post('/signup', userController.registerUser);

/**
 * @route GET api/users
 * 
 * @description Gets all users.
 */
router.get('/',authenticate, userController.getUsers);

/**
 * @route GET /api/users/current
 */
router.get('/current', userController.fetchCurrent);

export default router;
