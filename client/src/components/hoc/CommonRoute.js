import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import UserContext from 'context/UserContext';
import * as routes from 'constants/routes';

const CommonRoute = (props) => {
  const { component: Component, ...rest } = props;
  const { userData } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userData.token && userData.user)
          return <Redirect to={{
            pathname: routes.HOME,
            state: { from: props.location }
          }} />

        return <Component {...props} />
      }}
    />
  );
};

export default CommonRoute;
