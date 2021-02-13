import React, { useState, useEffect } from 'react';
import { Router as BrowserRouter, Switch, Redirect } from 'react-router-dom';

import * as routes from '../constants/routes';
import history from '../utils/history';
import * as storage from '../utils/storage';
import Home from './home';
import Login from './auth/Login';
import * as userService from '../services/users';
import UserContext from '../context/UserContext';
import { TOKEN } from 'constants/storage';
import PrivateRoute from './hoc/PrivateRoute';
import CommonRoute from './hoc/CommonRoute';

// Top level application router.
const Router = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  const checkLoggedIn = async () => {
    let token = storage.get(TOKEN);
    if(token === null){
      storage.set(TOKEN, '');
      token = ''
    }
    const userRes = await userService.fetchCurrentUser();
    setUserData({
      token,
      user: userRes.data
    })
  }

  useEffect(() => {
    let unmounted  = false; // note this flag denote mount status
    if( !unmounted ) checkLoggedIn();
    return () => {
      unmounted  = true;
    }; // use effect cleanup to set flag false, if unmounted
  }, [])

  return (
    <BrowserRouter history={history}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <CommonRoute path={routes.LOGIN} component={Login} />
          <PrivateRoute path={routes.HOME} component={Home} />
          {/* <CommonRoute path="*" component={Login} /> */}
          {/* <Route path={routes.HOME} component={Home} /> */}
          <Redirect to={routes.HOME} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default Router;
