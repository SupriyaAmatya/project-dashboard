import React from 'react';
import { Link } from 'react-router-dom';

import { logo } from 'assets/images';
import * as routes from 'constants/routes'

const Header = () => {
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
