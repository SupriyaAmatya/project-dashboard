import * as storage from '../utils/storage';

import { TOKEN } from '../constants/storage';

/**
 * Get token from storage
 *
 * @returns {string}
 */
export function getToken() {
  return storage.get(TOKEN);
}

/**
 * Set token to storage
 *
 * @returns {string}
 */
export function setToken(token) {
  return storage.set(TOKEN, token);
}

/**
 * Clear token.
 */
export function clear() {
  storage.clear();
}
