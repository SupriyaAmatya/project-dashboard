import axios from 'axios';

import config from 'config/config';

/**
 * Http Utility.
 */
export const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'content-type': 'application/json',
  },
});

export { http as default };
