import React, { useState, useContext } from 'react';
import { Formik } from 'formik';

import LoginSchema from 'schemas/LoginSchema';
import FormGroup from 'components/common/form';
import * as authService from 'services/auth';
import * as tokenService from 'services/token';
import * as routes from 'constants/routes';
import history from 'utils/history';
import UserContext from 'context/UserContext';
import APIError from '../common/apiError';

const Login = () => {
  const [apiError, setApiError] = useState('');
  const { setUserData } = useContext(UserContext);

  const handleLogin = async values => {
    const { email, password } = values;

    try {
      const loginRes = await authService.login(email, password);
      tokenService.setToken(loginRes.accessToken);

      setUserData({
        token: loginRes.accessToken,
        user: loginRes.user
      })
      history.push(routes.HOME);
    }
    catch (error) {
      setApiError(error.response.data.msg);
    }
  }
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="form-wrapper mx-auto mt-15x" style={{ maxWidth: '400px' }}>
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <FormGroup
                  required
                  name="email"
                  value={values.email}
                  label="Email"
                  placeholder="Enter Email Address"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  error={touched.email && errors.email}
                />
              </div>

              <div>
                <FormGroup
                  required
                  type="password"
                  name="password"
                  value={values.password}
                  label="Password"
                  placeholder="Enter Password"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  error={touched.password && errors.password}
                />
              </div>
              {apiError && <APIError message={apiError}/>}
              <div>
                <button type="submit" className="btn btn--secondary btn--block" disabled={!dirty || isSubmitting}>
                  Sign In
              </button>
              </div>
            </form>
          </div>
        )
      }}
    </Formik>
  );
};

export default Login;
