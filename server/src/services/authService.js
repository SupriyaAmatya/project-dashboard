import User from '../models/User';
import UserSession from '../models/UserSession';
import * as jwt from '../utils/jwt';
import * as bcrypt from '../utils/bcrypt';

/**
 * Logins the user.
 * 
 * @param {Object} reqBody
 * 
 * @returns {Object}
 */
export async function login(reqBody) {
  const { email, password } = reqBody;

  const user = await User.findOne({ email });

  if (!user) {
    return {
      msg: 'User doesnot exist.'
    }
  }

  const payload = {
    id: user._id,
  }

  // Verify password
  const passwordMatched = await bcrypt.verifyPassword(password, user);
  if (!passwordMatched) {
    return {
      msg: 'Password didnt match.'
    };
  }

  const accessToken = jwt.generateAccessToken(payload);
  const refreshToken = jwt.generateRefreshToken(payload);
  const userSession = new UserSession({
    token: refreshToken,
  });
  await userSession.save();

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    },
    accessToken,
    refreshToken,
  }
}

/**
 * Refreshes the access token and refresh token.
 * 
 * @param {String} refreshToken
 *
 * @returns {Object}
 */
export async function refresh(refreshToken) {
  const userSession = await UserSession.findOne({
    token: refreshToken
  });

  if (!userSession || !userSession.active)
    return {
      msg: 'No session with given token present.'
    }

  const isVerified = await jwt.verifyRefreshToken(refreshToken);
  if (!isVerified)
    return {
      msg: 'Refresh token expired.'
    }

  const accessToken = await jwt.generateAccessToken(isVerified);

  return {
    accessToken,
  }
}
