import HttpStatus from 'http-status-codes';

import * as userService from '../services/userService';
import { getHeaderValues } from '../utils/jwt'

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

/**
 * Get current user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export async function fetchCurrent(req, res, next) {
  const data = getHeaderValues(req.headers);
  const currentUser = data.data;
  try {
    const data = await userService.fetchByUserId(currentUser.id);

    res.status(HttpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
}
