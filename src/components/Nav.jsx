import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import MobileNav from './MobileNav';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="#!">
          <img src={logo} alt="" />
        </a>
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
            <Link
              to=""
              spy={true}
              smooth={true}
              offset={0} // -70
              duration={500}
              className="nav__link"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <MobileNav />
      <div className="blur"></div>
    </nav>
  );
};

export default Nav;
