import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import MobileNav from './MobileNav';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Nav = ({ blog }) => {
  const history = useHistory();
  if (!blog) {
    return (
      <nav className="nav">
        <div className="nav__logo">
          <RouterLink to="/">
            <img src={logo} alt="" />
          </RouterLink>
        </div>

        <div className="nav__items">
          <ul>
            <li>
              <Link
                to="works"
                spy={true}
                smooth={true}
                offset={0} // -60
                duration={500}
                className="nav__link"
              >
                Works
              </Link>
            </li>

            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0} // -70
                duration={500}
                className="nav__link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0} // -70
                duration={500}
                className="nav__link"
              >
                Contact
              </Link>
            </li>
            <li>
              <RouterLink to="/blog" className="nav__link">
                Blog
              </RouterLink>
            </li>
          </ul>
        </div>
        <MobileNav />
        <div className="blur"></div>
      </nav>
    );
  } else {
    return (
      <nav className="nav">
        <div className="nav__logo">
          <RouterLink to="/">
            <img src={logo} alt="" />
          </RouterLink>
        </div>

        <div className="nav__items">
          <ul>
            <li>
              <RouterLink
                onClick={() => history.goBack()}
                className="nav__link"
              >
                Go back
              </RouterLink>
            </li>
          </ul>
        </div>
        <MobileNav blog />
        <div className="blur"></div>
      </nav>
    );
  }
};

export default Nav;
