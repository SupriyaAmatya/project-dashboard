import HttpStatus from 'http-status-codes';

import * as userService from '../services/userService';

/**
 * Register a users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function registerUser(req, res, next) {
  const payload = req.body;

  try {
    const data = await userService.register(payload);

    res.status(HttpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * GET all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function getUsers(req, res, next) {
  try {
    const users = await userService.fetch();
    return res
      .status(HttpStatus.OK)
      .json(users);
  } catch (err) {
    next(err)
    return res
      .status(400)
      .json({ status: HttpStatus.INTERNAL_SERVER_ERROR, message: "Internal Server Error" });
  }
}
