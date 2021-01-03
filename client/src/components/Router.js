import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from '../constants/routes';
import history from '../utils/history';

import Home from './home';

// Top level application router.
const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
