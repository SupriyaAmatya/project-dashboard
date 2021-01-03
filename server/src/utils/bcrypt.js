import bcrypt from 'bcrypt';

import config from '../config';

const saltRounds = parseInt(config.SALT, 10);

/**
 * Hash the password.
 * 
 * @param {String} password
 *
 * @returns {String}
 */
export async function getHash(password) {
  const hash = await bcrypt.hash(password, saltRounds);

  return hash;
}

/**
 * Compares the password.
 * 
 * @param {String} password
 * @param {Object} user
 *
 * @returns {Boolean}
 */
export async function verifyPassword(password, user) {
  const matched = await bcrypt.compare(password, user.password);

  return matched;
}
