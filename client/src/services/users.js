import http from 'utils/http';
import config from 'config/config';

/**
 * Fetch current cuser.
 * 
 */
export const fetchCurrentUser = async () => {
  const data = await http.get(config.endpoints.users.current);

  return data;
}
