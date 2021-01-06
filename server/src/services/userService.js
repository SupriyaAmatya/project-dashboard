import User from '../models/User';
import * as jwt from '../utils/jwt';
import * as bcrypt from '../utils/bcrypt';

/**
* Register a user.
*
* @param {Object} reqBody
*
* @returns {Promise}
*/
export async function register(reqBody) {
  const { name, email, password, repeatPassword } = reqBody;

  // validate
  if (!name || !email || !password || !repeatPassword)
    return {
      msg: 'Please enter all fields.'
    }

  if (password.length < 6)
    return {
      msg: 'Password needs to be 6 character long.'
    }

  if (password !== repeatPassword)
    return {
      msg: 'Password did not match'
    }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return {
      msg: 'Account with this email already exists.'
    }
  }

  // Hash password
  const hashedPassword = await bcrypt.getHash(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  const payload = {
    id: user._id,
  }

  const accessToken = jwt.generateAccessToken(payload);
  const refreshToken = jwt.generateRefreshToken(payload);

  user.save();

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
* Fetch all Users.
*
* @returns {Promise}
*/
export async function fetch() {
  const result = await User.find().sort({ name: 1 }).select('-password')

  return result;
}

/**
 * Find user by email.
 *
 * @param {Object} user
 * 
 * @returns {Promise}
 */
export async function findByEmail(user) {
  const result = await User.findOne({ email: user.email });

  return result;
}

/**
 * Find user by id.
 *
 * @param {String} userID
 * 
 * @returns {Promise}
 */
export async function fetchByUserId(userID) {
  const result = await User.findById(userID).select('-password').select('-__v');
console.log(result);
  return result;
}
