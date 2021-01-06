import * as jwtUtils from './jwt';

/**
 * Extract token from headers in http request.
 *
 * @param {Object} headers
 */
export function extractTokenFromHeaders(headers = {}) {
  const { authorization = '' } = headers;

  const [tokenType, token] = authorization.split(' ').filter(Boolean);

  if (tokenType !== 'Bearer' || !token) {
    return {
      msg: 'Invalid Token',
    };
  }

  jwtUtils.verifyAccessToken(token);

  return {
    ok: true,
    token,
  };
}
