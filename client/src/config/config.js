/**
 * Application wide configuration.
 */

const config = {
  baseURI: process.env.REACT_APP_API_BASE_URI,
  endpoints: {
    auth: {
      login: '/auth/login'
    },
    users: {
      all: '/users',
      current: '/users/current'
    },
    project: '/projects',
  },
};

export default config;
