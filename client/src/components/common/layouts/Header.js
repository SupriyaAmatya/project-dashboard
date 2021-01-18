import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { logo } from 'assets/images';
import * as routes from 'constants/routes'
import * as authService from 'services/auth';
import UserContext from 'context/UserContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
            <div className="media media--small navbar__right-logout">
              <div className="text-bold" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {userData.user.name && userData.user.name}
              </div>
              <div className={classnames('dropmenu', { show: isMenuOpen })}>
                <div className="dropmenu__node">
                  <a href="!#" onClick={logout}>Logout</a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
