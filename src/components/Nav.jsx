import React from 'react';
import '../styles/Nav.css';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

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
            <a href="#!">Works</a>
          </li>
          <li>
            <a href="#!">Blog</a>
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
        </ul>
      </div>

      <div className="nav__hamContainer">
        <div className="nav__ham"></div>
        <div className="nav__ham"></div>
        <div className="nav__ham"></div>
      </div>
      <div class="blur"></div>
    </nav>
  );
};

export default Nav;
