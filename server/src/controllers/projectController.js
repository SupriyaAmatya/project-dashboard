import HttpStatus from 'http-status-codes';

import * as projectService from '../services/projectService';

/**
 * GET all project list.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function getProjects(req, res, next) {
  try {
    const projects = await projectService.fetch();
    return res
      .status(HttpStatus.OK)
      .json(projects);
  } catch (err) {
    next(err)
    return res
      .status(400)
      .json({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: "Internal Server Error" });
  }
}

/**
 * GET a project by Id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function getProjectById(req, res, next) {
  const id = req.params.id;
  try {
    const data = await projectService.fetchById(id);

    // if (data === null) {
    //   return res
    //     .status(HttpStatus.NOT_FOUND)
    //     .json({ status: HttpStatus.NOT_FOUND, message: "Project not found" });
    // }

    return res
      .status(HttpStatus.OK)
      .json(data)
  } catch (err) {
    next(err);
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ status: HttpStatus.NOT_FOUND, message: "Project not found" });
  }
}

/**
 * POST new project.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function createProject(req, res, next) {
  const payload = req.body;

  try {
    const data = await projectService.create(payload);

    res.status(HttpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * UPDATE a project by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function updateProject(req, res, next) {
  try {
    const data = await projectService.updateById(req.params.id, req.body);
    const updatedData = await projectService.fetchById(data._id);

    res.status(HttpStatus.OK).json(updatedData);
  } catch (err) {
    next(err);
  }
}

/**
 * DELETE a project by id.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function deleteProject(req, res, next) {
  try {
    await projectService.deleteById(req.params.id);

    res.status(HttpStatus.OK).json({ message: "Project deleted!" });
  } catch (err) {
    next(err);
    return res
      .status(HttpStatus.NOT_FOUND)
      .json({ status: HttpStatus.NOT_FOUND, message: "Project not found" });
  }
}

