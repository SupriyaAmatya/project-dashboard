import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import Projects from './projects';

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={() => <Redirect to={routes.PROJECTS} />} />

      <Route path={routes.PROJECTS} component={Projects} />
    </Switch>
  );
};

export default HomeRouter;
