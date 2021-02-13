import { Router } from 'express';

import Project from '../models/Project';
import { authenticate } from '../middleware/authenticate';
import * as projectController from '../controllers/projectController';

const router = Router();

/**
 * @route GET api/projects
 * @description Gets all project list.
 * 
 */
router.get('/', authenticate, projectController.getProjects);

/**
 * @route GET api/projects/:id
 * @description Gets a project details.
 * 
 */
router.get('/:id',authenticate, projectController.getProjectById);

/**
 * @route POST api/projects
 * @description Creates a project.
 * 
 */
router.post('/',authenticate, projectController.createProject);

/**
 * @route PUT api/projects/:id
 * @description Updates a project.
 * 
 */
router.put('/:id',authenticate, projectController.updateProject);

/**
 * @route DELETE api/projects/:id
 * @description Deletes a project.
 * 
 */
router.delete('/:id',authenticate, projectController.deleteProject)

export default router;
