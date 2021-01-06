import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { logo } from 'assets/images';
import * as routes from 'constants/routes'
import * as authService from 'services/auth';
import UserContext from 'context/UserContext';

const Header = () => {
  const { userData, setUserData } = useContext(UserContext);
  
  const logout = () => {
    // setUserData({
    //   token: undefined,
    //   user: undefined
    // })
    // storage.set('token', '');
    // history.push(routes.LOGIN);
    authService.logout(setUserData);
  }

  return (
    <nav className="navbar navbar--bordered-bottom navbar--sticky">
      <div className="container">
        <div className="navbar__wrap navbar__wrap--content-spread">
          <div className="navbar__left">
            <div className="navbar__logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav">
              <div className="nav__node">
                <Link to={routes.PROJECTS}>
                  Projects
                  </Link>
              </div>
            </div>
          </div>
          <div className="navbar__right">
            <div className="nav__node">
              <p>Welcome, <strong>{userData.user.name && userData.user.name}</strong></p>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
