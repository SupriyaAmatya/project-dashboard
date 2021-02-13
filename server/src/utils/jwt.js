import jwt from "jsonwebtoken";
import config from "../config";
import { extractTokenFromHeaders } from './auth';

export function generateAccessToken(data) {
  return jwt.sign({ data }, config.ACCESS_TOKEN, {
    expiresIn: config.ACCESS_TOKEN_DURATION,
  });
}

export function generateRefreshToken(data) {
  return jwt.sign({ data }, config.REFRESH_TOKEN, {
    expiresIn: config.REFRESH_TOKEN_DURATION,
  });
}

export function verifyAccessToken(accessToken) {
  return jwt.verify(accessToken, config.ACCESS_TOKEN);
}

export function verifyRefreshToken(refreshToken) {
  return jwt.verify(refreshToken, config.REFRESH_TOKEN);
}

/**
 * Get roles from token.
 *
 * @param {String} header
 * @returns {Object}
 */
export function getHeaderValues(header) {
  const { token } = extractTokenFromHeaders(header);

  return jwt.verify(token, config.ACCESS_TOKEN);
}
