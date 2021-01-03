import { Router } from 'express';

import Project from '../models/Project';
import * as projectController from '../controllers/projectController';

const router = Router();

/**
 * @route GET api/projects
 * @description Gets all project list.
 * 
 */
router.get('/', projectController.getProjects);

/**
 * @route GET api/projects/:id
 * @description Gets a project details.
 * 
 */
router.get('/:id', projectController.getProjectById);

/**
 * @route POST api/projects
 * @description Creates a project.
 * 
 */
router.post('/', projectController.createProject);

/**
 * @route PUT api/projects/:id
 * @description Updates a project.
 * 
 */
router.put('/:id', projectController.updateProject);

/**
 * @route DELETE api/projects/:id
 * @description Deletes a project.
 * 
 */
router.delete('/:id', projectController.deleteProject)

export default router;
