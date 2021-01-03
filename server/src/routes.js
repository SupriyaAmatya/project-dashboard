import { Router } from 'express';

import projectRoutes from './routes/projects';
import authRoutes from './routes/auth';
import userRoutes from './routes/user';

const router = Router();

/**
 * Contains API routes for the application.
 */
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

export default router;
