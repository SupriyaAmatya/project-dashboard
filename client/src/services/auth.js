import http from 'utils/http';
import config from 'config/config';
import history from 'utils/history';
import * as storage from 'utils/storage';
import * as routes from 'constants/routes';

export const login = async (email, password) => {
  const url = config.endpoints.auth.login
  const response = await http.post(url, {
    email,
    password
  });

  return response.data;
}

export const logout = async (setUserData) => {
  setUserData({
    token: undefined,
    user: undefined
  })
  storage.set('token', '');
  history.push(routes.LOGIN);
}
