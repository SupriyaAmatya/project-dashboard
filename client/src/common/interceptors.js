import HttpStatus from 'http-status';

import history from '../utils/history';
import * as routes from '../constants/routes';

import * as authService from'../services/auth';

import * as tokenService from '../services/token';

const RETRY_COUNT_LIMIT = 3;
const AUTHORIZATION_HEADER = 'Authorization';
const SESSION_EXPIRE = 'Refresh token expired';
const JWT_EXPIRED = 'jwt expired';
const NO_AUTH_TOKEN = 'No authorization token was found';
const INVALID_TOKEN = 'Invalid Token';

/**
 * Build authorization header
 *
 * @param {string} accessToken
 * @returns {string}
 */
function buildAuthHeader(accessToken) {
  return `Bearer ${accessToken}`;
}

/**
 * Interceptor to add authentication header for all requests.
 *
 * @param {object} request
 * @returns {object}
 */
export function requestInterceptor(request) {
  const accessToken = tokenService.getToken();

  if (accessToken && !request.headers.AUTHORIZATION_HEADER) {
    request.headers[AUTHORIZATION_HEADER] = buildAuthHeader(accessToken);
  }

  return request;
}

/**
 * Interceptor to refresh access token
 *
 * @param {object} error
 * @returns {object}
 */
export async function responseInterceptor(error) {
  if (!error.response) {
    return Promise.reject(error);
  }

  const code = error.response.status;
  const message = error.response.data.msg;

  // const { code, message } = error.response.data.error;
  const originalRequest = error.config;
  if (
    (code === HttpStatus.UNAUTHORIZED && message === SESSION_EXPIRE) ||
    message === JWT_EXPIRED ||
    message === NO_AUTH_TOKEN ||
    message === INVALID_TOKEN ||
    originalRequest.retryCount > RETRY_COUNT_LIMIT
  ) {
    await authService.logout();
    history.push(routes.LOGIN);
  }

  return Promise.reject(error);
}
