import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import MobileNav from './MobileNav';
import { animateScroll as scroll } from 'react-scroll';

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
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Works
            </Link>
          </li>

          <li>
            <a href="#!">About</a>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li>
            <a href="#!">Blog</a>
          </li>
        </ul>
      </div>
      <MobileNav />
      <div className="blur"></div>
    </nav>
  );
};

export default Nav;
