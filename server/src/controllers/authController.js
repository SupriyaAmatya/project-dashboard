import HttpStatus from 'http-status-codes';

import * as authService from '../services/authService';

/**
 * Login the user.
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
export async function login(req, res, next) {
  const loginPayload = req.body;

  try {
    const data = await authService.login(loginPayload);
    console.log(data);
    if(data.msg){
      res.status(400).json(data);
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

/**
 * Refresh the accessToken and refreshToken.
 * 
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
export async function refresh(req, res, next) {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      res.status(HttpStatus.BAD_REQUEST)
    }
    const data = await authService.refresh(refreshToken);

    res.status(HttpStatus.OK).json(data);
  } catch (err) {
    next(err);
  }
}
